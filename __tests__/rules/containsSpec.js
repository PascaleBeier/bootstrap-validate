/**
 * @jest-environment jsdom
 */

import rules from "../../src/rules";

describe("contains", () => {
  const valid = "Name";
  const invalid = "AAAa   ss224";
  const input = document.createElement("input");
  input.value = "My Name";

  it("should return true if input contains string", () => {
    expect(rules.contains(input, valid)).toBeTruthy();
  });

  it("should return false if input doesn't contain string", () => {
    expect(rules.contains(input, invalid)).toBeFalsy();
  });
});
