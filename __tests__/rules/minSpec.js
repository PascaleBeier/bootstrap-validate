/**
 * @jest-environment jsdom
 */

import rules from "../../src/rules";

describe("min", () => {
  const input = document.createElement("input");
  input.value = "abcd";

  it("should return true if value length equals", () => {
    expect(rules.min(input, 4)).toBeTruthy();
  });

  it("should be able to take string parameters", () => {
    expect(rules.min(input, "4")).toBeTruthy();
  });

  it("should return false if value length is lower", () => {
    expect(rules.min(input, 5)).toBeFalsy();
  });

  it("should be able to take string parameters", () => {
    expect(rules.min(input, "5")).toBeFalsy();
  });

  it("should return true if value length is higher", () => {
    expect(rules.min(input, 3)).toBeTruthy();
  });

  it("should be able to take string parameters", () => {
    expect(rules.min(input, "3")).toBeTruthy();
  });
});
