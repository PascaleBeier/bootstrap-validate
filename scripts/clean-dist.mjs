import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const distPath = path.join(root, "dist");

await Promise.all([
  fs.rm(path.join(distPath, "constants.d.ts"), { force: true }),
  fs.rm(path.join(distPath, "errors.d.ts"), { force: true }),
  fs.rm(path.join(distPath, "rules"), { force: true, recursive: true }),
]);
