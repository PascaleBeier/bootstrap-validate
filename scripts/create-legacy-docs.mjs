import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const docsDir = path.join(root, "docs");

const legacyCopies = [
  ["v1/index.html", "v1/index.html"],
  ["v1/installation/index.html", "v1/installation.html"],
  ["v1/usage/index.html", "v1/usage.html"],
  ["v1/rules/index.html", "v1/rules.html"],
  ["v2/index.html", "v2/index.html"],
  ["v2/installation/index.html", "v2/installation.html"],
  ["v2/usage/index.html", "v2/usage.html"],
  ["v2/rules/index.html", "v2/rules.html"],
  ["v2/download/index.html", "v2/download.html"],
];

for (const [from, to] of legacyCopies) {
  const source = path.join(docsDir, from);
  const target = path.join(docsDir, to);
  if (source === target) continue;
  await fs.copyFile(source, target);
}

console.log("Created legacy .html documentation URLs.");
