/**
 * @jest-environment jsdom
 */

import rules from "../../src/rules";

describe("max", () => {
  const input = document.createElement("input");
  input.value = "abcd";

  it("should return false if value length is higher", () => {
    expect(rules.max(input, 3)).toBeFalsy();
  });

  it("should handle string arguments", () => {
    expect(rules.max(input, "3")).toBeFalsy();
  });

  it("should return true if value length equals", () => {
    expect(rules.max(input, 4)).toBeTruthy();
  });

  it("should handle string arguments", () => {
    expect(rules.max(input, "4")).toBeTruthy();
  });

  it("should return true if value length is lower", () => {
    expect(rules.max(input, 5)).toBeTruthy();
  });

  it("should handle string arguments", () => {
    expect(rules.max(input, "5")).toBeTruthy();
  });
});
