/**
 * @jest-environment jsdom
 */

import rules from "../../src/rules";

describe("endsWith", () => {
  const valid = "Name";
  const invalid = "AAAa   ss224";
  const input = document.createElement("input");
  input.value = "My Name";

  it("should return true if input value end with the given string", () => {
    expect(rules.endsWith(input, valid)).toBeTruthy();
  });

  it("should return false if input value doesn't end with the given string", () => {
    expect(rules.endsWith(input, invalid)).toBeFalsy();
  });
});
