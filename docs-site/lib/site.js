export const siteUrl = "https://bootstrap-validate.js.org";

export const versions = [
  {
    slug: "v1",
    label: "v1",
    title: "Version 1",
    bootstrap: "Bootstrap 3",
    status: "Archived",
    note: "For Bootstrap 3 projects.",
  },
  {
    slug: "v2",
    label: "v2",
    title: "Version 2",
    bootstrap: "Bootstrap 4",
    status: "Final",
    note: "Final Bootstrap 4 line. Version 2.3.0 closes the long-standing v2 issue set.",
  },
  {
    slug: "v3",
    label: "v3",
    title: "Version 3",
    bootstrap: "Bootstrap 5",
    status: "Upcoming",
    note: "Planned complete refactor for Bootstrap 5.",
  },
];

export const pageDefinitions = {
  installation: {
    label: "Installation",
    description: "Install bootstrap-validate from npm or a CDN.",
    versions: ["v1", "v2", "v3"],
  },
  usage: {
    label: "Usage",
    description: "Learn the bootstrapValidate() API, rules, options, and callbacks.",
    versions: ["v1", "v2", "v3"],
  },
  download: {
    label: "Download",
    description: "Download archived bootstrap-validate releases.",
    versions: ["v2", "v3"],
  },
};

export function getVersion(slug) {
  const version = versions.find((candidate) => candidate.slug === slug);
  if (!version) throw new Error(`Unknown docs version: ${slug}`);
  return version;
}

export function getVersionRules(rules, versionSlug) {
  return rules.filter((rule) => rule.versions.includes(versionSlug));
}

export function versionPath(versionSlug, path = "") {
  return `/${versionSlug}/${path}`.replace(/\/+/g, "/");
}

export function canonicalUrl(path) {
  return `${siteUrl}${path}`;
}

export function canonicalHead(path) {
  return [
    {
      tag: "link",
      attrs: {
        rel: "canonical",
        href: canonicalUrl(path),
      },
    },
  ];
}

export function sidebarFor(versionSlug, rules = []) {
  const version = getVersion(versionSlug);
  const items = [
    { label: "Overview", link: `/${versionSlug}/` },
    { label: "Installation", link: `/${versionSlug}/installation/` },
    { label: "Usage", link: `/${versionSlug}/usage/` },
    {
      label: "Rules",
      items: [
        { label: "All rules", link: `/${versionSlug}/rules/` },
        ...rules.map((rule) => ({
          label: rule.name,
          link: `/${versionSlug}/rules/${rule.name}/`,
        })),
      ],
    },
  ];

  if (versionSlug !== "v1") {
    items.splice(3, 0, { label: "Download", link: `/${versionSlug}/download/` });
  }

  return [
    {
      label: `${version.label} (${version.bootstrap})`,
      items,
    },
    {
      label: "Project",
      items: [
        { label: "About", link: "/about/" },
        { label: "Privacy", link: "/privacy/" },
      ],
    },
  ];
}
