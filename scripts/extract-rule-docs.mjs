import fs from "node:fs/promises";
import path from "node:path";
import ts from "typescript";

const root = process.cwd();
const rulesPath = path.join(root, "src/rules/index.ts");
const outputPath = path.join(root, "docs-site/generated/rules.json");

async function readSourceFile(filePath) {
  const source = await fs.readFile(filePath, "utf8");
  return {
    source,
    sourceFile: ts.createSourceFile(
      filePath,
      source,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TS,
    ),
  };
}

function getNodeName(node) {
  if (!node) return "";
  if (ts.isIdentifier(node)) return node.text;
  if (ts.isStringLiteral(node) || ts.isNumericLiteral(node)) return node.text;
  return "";
}

function normalizeSince(value) {
  return value.trim().replace(/^v/i, "");
}

function versionMajor(value) {
  const major = Number.parseInt(normalizeSince(value).split(".")[0], 10);
  if (!Number.isFinite(major)) {
    throw new Error(`Could not read major version from @since ${value}`);
  }
  return major;
}

function cleanDocLine(line) {
  return line
    .replace(/^\s*\/\*\*\s?/, "")
    .replace(/\s*\*\/\s*$/, "")
    .replace(/^\s*\*\s?/, "")
    .trimEnd();
}

function parseDocblock(block) {
  const tags = {};
  let currentTag = null;

  for (const rawLine of block.split(/\r?\n/)) {
    const line = cleanDocLine(rawLine).trim();
    if (!line) continue;

    const tagMatch = line.match(/^@(\w+)\s*(.*)$/);
    if (tagMatch) {
      currentTag = tagMatch[1];
      const value = tagMatch[2].trim();
      if (currentTag === "param") {
        tags.param ??= [];
        const [name = "", ...rest] = value.split(/\s+/);
        tags.param.push({
          name,
          description: rest.join(" ").trim(),
        });
      } else {
        tags[currentTag] = value;
      }
      continue;
    }

    if (currentTag && currentTag !== "param") {
      tags[currentTag] = `${tags[currentTag] ?? ""} ${line}`.trim();
    }
  }

  return tags;
}

function escapeRuleOption(value) {
  return String(value).replace(/\|/g, "\\|");
}

function buildUsage(name, tags) {
  const options = [];
  if (tags.example) options.push(escapeRuleOption(tags.example));
  if (tags.error) options.push(escapeRuleOption(tags.error));
  return `bootstrapValidate('#input', '${[name, ...options].join(":")}')`;
}

function getImportMap(file) {
  const imports = new Map();

  for (const statement of file.statements) {
    if (!ts.isImportDeclaration(statement)) continue;
    if (!ts.isStringLiteral(statement.moduleSpecifier)) continue;

    const defaultImport = statement.importClause?.name;
    if (!defaultImport) continue;

    imports.set(defaultImport.text, statement.moduleSpecifier.text);
  }

  return imports;
}

function findRulesObject(file) {
  let rulesObject = null;

  for (const statement of file.statements) {
    if (ts.isVariableStatement(statement) && statement.declarationList.declarations.length === 1) {
      const declaration = statement.declarationList.declarations[0];
      if (
        ts.isIdentifier(declaration.name) &&
        declaration.name.text === "rules" &&
        declaration.initializer &&
        ts.isObjectLiteralExpression(declaration.initializer)
      ) {
        rulesObject = declaration.initializer;
      }
    }
  }

  if (rulesObject) return rulesObject;

  throw new Error("Expected src/rules/index.ts to define a rules object.");
}

function getRuleOrder(rulesObject, imports) {
  return rulesObject.properties.map((property) => {
    if (ts.isShorthandPropertyAssignment(property) && imports.has(property.name.text)) {
      return {
        name: property.name.text,
        modulePath: imports.get(property.name.text),
      };
    }

    if (ts.isPropertyAssignment(property) && ts.isIdentifier(property.initializer)) {
      return {
        name: getNodeName(property.name),
        modulePath: imports.get(property.initializer.text),
      };
    }

    throw new Error("Expected the rules object to contain imported rule functions only.");
  });
}

function resolveRulePath(modulePath) {
  if (!modulePath) throw new Error("Missing rule import path.");
  return path.join(path.dirname(rulesPath), `${modulePath}.ts`);
}

function findDefaultExportedFunction(file) {
  for (const statement of file.statements) {
    if (!ts.isFunctionDeclaration(statement)) continue;

    const isDefaultExport = statement.modifiers?.some(
      (modifier) => modifier.kind === ts.SyntaxKind.DefaultKeyword,
    );
    if (isDefaultExport) return statement;
  }

  throw new Error(`Expected ${path.relative(root, file.fileName)} to default export a function.`);
}

function validateRule(rule) {
  const missing = [];
  for (const field of ["since", "description", "error"]) {
    if (!rule[field]) missing.push(`@${field}`);
  }
  if (rule.params.length > 0 && !rule.example) missing.push("@example");
  if (missing.length > 0) {
    throw new Error(`${rule.name} is missing ${missing.join(", ")}.`);
  }
}

const { sourceFile } = await readSourceFile(rulesPath);
const imports = getImportMap(sourceFile);
const rulesObject = findRulesObject(sourceFile);
const rules = await Promise.all(
  getRuleOrder(rulesObject, imports).map(async ({ name, modulePath }, index) => {
    const rulePath = resolveRulePath(modulePath);
    const { source, sourceFile } = await readSourceFile(rulePath);
    const value = findDefaultExportedFunction(sourceFile);
    const functionSource = source.slice(value.getFullStart(), value.getEnd()).trim();
    const docblock = functionSource.match(/\/\*\*[\s\S]*?\*\//)?.[0];
    if (!docblock) {
      throw new Error(`${name} is missing a JSDoc docblock.`);
    }

    const tags = parseDocblock(docblock);
    const params = tags.param ?? [];
    const signatureParams =
      value.parameters?.map((param) => getNodeName(param.name)).filter(Boolean) ?? [];
    const rule = {
      name,
      order: index,
      since: tags.since ?? "",
      description: tags.description ?? "",
      error: tags.error ?? "",
      example: tags.example ?? "",
      params,
      signature: `${name}(${signatureParams.join(", ")})`,
      source: functionSource,
      usage: buildUsage(name, tags),
      major: versionMajor(tags.since ?? ""),
      versions: [],
    };

    rule.versions = ["v1", "v2", "v3"].filter((version) => {
      const major = Number.parseInt(version.slice(1), 10);
      return major === 3 || rule.major <= major;
    });

    validateRule(rule);
    return rule;
  }),
);

await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(`${outputPath}.tmp`, `${JSON.stringify(rules, null, 2)}\n`);
await fs.rename(`${outputPath}.tmp`, outputPath);

console.log(`Generated ${path.relative(root, outputPath)} from src/rules/.`);
