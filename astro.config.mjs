import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightVersions from "starlight-versions";

export default defineConfig({
  site: "https://bootstrap-validate.js.org",
  srcDir: "docs-site",
  outDir: "docs",
  vite: {
    resolve: {
      alias: {
        "starlight-versions/overrides/PageTitle.astro": fileURLToPath(
          new URL("./docs-site/components/PageTitle.astro", import.meta.url),
        ),
        "starlight-versions/overrides/Banner.astro": fileURLToPath(
          new URL("./docs-site/components/Banner.astro", import.meta.url),
        ),
      },
    },
  },
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
        baseUrl: "https://github.com/PascaleBeier/bootstrap-validate/edit/main/",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/PascaleBeier/bootstrap-validate",
        },
      ],
      sidebar: [
        {
          label: "Project",
          items: [
            { label: "Home", link: "/" },
            { label: "About", link: "/about/" },
            { label: "Privacy", link: "/privacy/" },
            { label: "v2 Docs", link: "/v2/" },
            { label: "v3 Preview", link: "/v3/" },
          ],
        },
      ],
      components: {
        Footer: "./docs-site/components/Footer.astro",
      },
      plugins: [
        starlightVersions({
          current: {
            label: "Project",
            redirect: "root",
          },
          versions: [
            { slug: "v3", label: "v3", redirect: "same-page" },
            { slug: "v2", label: "v2", redirect: "same-page" },
            { slug: "v1", label: "v1", redirect: "same-page" },
          ],
        }),
      ],
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
