import { parse } from "@babel/parser";
import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const rulesPath = path.join(root, "src/rules.js");
const outputPath = path.join(root, "docs-site/generated/rules.json");

const source = await fs.readFile(rulesPath, "utf8");
const ast = parse(source, {
  sourceType: "module",
  plugins: ["jsx"],
  ranges: true,
});

function getNodeName(node) {
  if (!node) return "";
  if (node.type === "Identifier") return node.name;
  if (node.type === "StringLiteral") return node.value;
  if (node.type === "NumericLiteral") return String(node.value);
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

function findRulesObject(program) {
  const exportDefault = program.body.find(
    (node) => node.type === "ExportDefaultDeclaration"
  );
  if (exportDefault?.declaration?.type === "ObjectExpression") {
    return exportDefault.declaration;
  }
  throw new Error("Expected src/rules.js to export a default object.");
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

const rulesObject = findRulesObject(ast.program);
const rules = rulesObject.properties
  .filter((property) => property.type === "ObjectProperty")
  .map((property, index) => {
    const name = getNodeName(property.key);
    const value = property.value;
    const functionSource = source.slice(value.start, value.end).trim();
    const docblock = functionSource.match(/\/\*\*[\s\S]*?\*\//)?.[0];
    if (!docblock) {
      throw new Error(`${name} is missing a JSDoc docblock.`);
    }

    const tags = parseDocblock(docblock);
    const params = tags.param ?? [];
    const signatureParams =
      value.params?.map((param) => getNodeName(param)).filter(Boolean) ?? [];
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
  });

await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(`${outputPath}.tmp`, `${JSON.stringify(rules, null, 2)}\n`);
await fs.rename(`${outputPath}.tmp`, outputPath);

console.log(`Generated ${path.relative(root, outputPath)} from src/rules.js.`);
