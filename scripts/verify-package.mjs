import { execFileSync } from "node:child_process";

const expectedFiles = new Set([
  "CHANGELOG.md",
  "LICENSE.md",
  "README.md",
  "dist/bootstrap-validate.js",
  "package.json",
  "src/bootstrap-validate.js",
  "src/constants.js",
  "src/errors.js",
  "src/rules.js",
]);

const output = execFileSync("npm", ["pack", "--dry-run", "--json"], {
  encoding: "utf8",
  stdio: ["ignore", "pipe", "inherit"],
});
const [pack] = JSON.parse(output);
const actualFiles = new Set(pack.files.map((file) => file.path));

const missingFiles = [...expectedFiles].filter((file) => !actualFiles.has(file));
const extraFiles = [...actualFiles].filter((file) => !expectedFiles.has(file));

if (missingFiles.length || extraFiles.length) {
  if (missingFiles.length) {
    console.error("Missing expected package files:");
    for (const file of missingFiles) console.error(`- ${file}`);
  }

  if (extraFiles.length) {
    console.error("Unexpected package files:");
    for (const file of extraFiles) console.error(`- ${file}`);
  }

  process.exit(1);
}

console.log(`Verified npm package contents (${actualFiles.size} files).`);
