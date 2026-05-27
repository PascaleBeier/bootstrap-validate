import { describe, expect, it } from "vitest";

import rules from "../../src/rules";

describe("text", () => {
  const input = document.createElement("input");

  it("accepts Latin names with accents", () => {
    input.value = "François Müller";
    expect(rules.text(input)).toBe(true);
  });

  it("accepts apostrophes and hyphens", () => {
    input.value = "Anne-Marie O'Neill";
    expect(rules.text(input)).toBe(true);
  });

  it("rejects numbers", () => {
    input.value = "John123";
    expect(rules.text(input)).toBe(false);
  });
});
