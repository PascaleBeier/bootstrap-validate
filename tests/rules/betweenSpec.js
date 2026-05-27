import { describe, expect, it } from "vitest";

import rules from "../../src/rules";

describe("between", () => {
  const input = document.createElement("input");

  it("accepts values inside the inclusive range", () => {
    input.value = "42";
    expect(rules.between(input, 18, 65)).toBe(true);
  });

  it("accepts the range boundaries", () => {
    input.value = "18";
    expect(rules.between(input, 18, 65)).toBe(true);
    input.value = "65";
    expect(rules.between(input, 18, 65)).toBe(true);
  });

  it("rejects values outside the range", () => {
    input.value = "17";
    expect(rules.between(input, 18, 65)).toBe(false);
  });

  it("rejects non-numeric values", () => {
    input.value = "nope";
    expect(rules.between(input, 18, 65)).toBe(false);
  });
});
