import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const docsDir = path.join(root, "docs");

const requiredFiles = [
  "index.html",
  "privacy/index.html",
  "about/index.html",
  "v1/index.html",
  "v1/installation.html",
  "v1/installation/index.html",
  "v1/usage.html",
  "v1/usage/index.html",
  "v1/rules.html",
  "v1/rules/index.html",
  "v1/rules/min/index.html",
  "v2/index.html",
  "v2/installation.html",
  "v2/installation/index.html",
  "v2/usage.html",
  "v2/usage/index.html",
  "v2/download.html",
  "v2/download/index.html",
  "v2/rules.html",
  "v2/rules/index.html",
  "v2/rules/email/index.html",
  "v2/rules/regex/index.html",
  "v2/rules/matches/index.html",
  "v2/rules/inArray/index.html",
  "v3/index.html",
  "v3/installation/index.html",
  "v3/usage/index.html",
  "v3/rules/index.html",
  "CNAME",
];

async function readAllHtmlFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const filePath = path.join(directory, entry.name);
      if (entry.isDirectory()) return readAllHtmlFiles(filePath);
      if (entry.isFile() && entry.name.endsWith(".html")) return [filePath];
      return [];
    })
  );
  return files.flat();
}

for (const file of requiredFiles) {
  await fs.access(path.join(docsDir, file));
}

const htmlFiles = await readAllHtmlFiles(docsDir);
for (const file of htmlFiles) {
  const html = await fs.readFile(file, "utf8");
  const hitkeepCount = (
    html.match(/<script\b[^>]*src="https:\/\/cloud\.hitkeep\.eu\/hk\.js"/g) ??
    []
  ).length;
  if (hitkeepCount !== 1) {
    throw new Error(
      `${path.relative(root, file)} contains HitKeep ${hitkeepCount} times.`
    );
  }
  if (/google-analytics\.com|window\.ga|UA-68262372-6/.test(html)) {
    throw new Error(`${path.relative(root, file)} still references GA.`);
  }
}

console.log(`Verified ${requiredFiles.length} required docs files.`);
