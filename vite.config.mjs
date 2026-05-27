import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  publicDir: false,
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(import.meta.dirname, "src/bootstrap-validate.ts"),
      name: "bootstrapValidate",
      formats: ["es", "umd"],
      fileName: (format) => (format === "umd" ? "bootstrap-validate.js" : "bootstrap-validate.mjs"),
    },
    rollupOptions: {
      output: {
        exports: "default",
      },
    },
    target: "es2015",
  },
});
