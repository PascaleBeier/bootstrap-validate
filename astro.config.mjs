import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://bootstrap-validate.js.org",
  srcDir: "docs-site",
  outDir: "docs",
  build: {
    format: "directory",
  },
  integrations: [
    starlight({
      title: "bootstrap-validate",
      description:
        "A simple form validation utility for Bootstrap 3, Bootstrap 4, and Bootstrap 5.",
      customCss: ["./docs-site/styles/docs.css"],
      editLink: {
        baseUrl:
          "https://github.com/PascaleBeier/bootstrap-validate/edit/main/",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/PascaleBeier/bootstrap-validate",
        },
      ],
      components: {
        Footer: "./docs-site/components/Footer.astro",
      },
      head: [
        {
          tag: "script",
          attrs: {
            async: true,
            src: "https://cloud.hitkeep.eu/hk.js",
          },
        },
      ],
    }),
  ],
});
