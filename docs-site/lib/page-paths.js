import rules from "../generated/rules.json";
import { getVersionRules, pageDefinitions, versions } from "./site.js";

export function versionPaths() {
  return versions.map((version) => ({
    params: { version: version.slug },
    props: { versionSlug: version.slug },
  }));
}

export function contentPagePaths() {
  return versions.flatMap((version) =>
    Object.entries(pageDefinitions)
      .filter(([, page]) => page.versions.includes(version.slug))
      .map(([page]) => ({
        params: { version: version.slug, page },
        props: { versionSlug: version.slug, page },
      })),
  );
}

export function ruleIndexPaths() {
  return versions.map((version) => ({
    params: { version: version.slug },
    props: { versionSlug: version.slug },
  }));
}

export function ruleDetailPaths() {
  return versions.flatMap((version) =>
    getVersionRules(rules, version.slug).map((rule) => ({
      params: { version: version.slug, rule: rule.name },
      props: { versionSlug: version.slug, ruleName: rule.name },
    })),
  );
}
