/**
 * @jest-environment jsdom
 */

import rules from "../../src/rules";

describe("required", () => {
  const input = document.createElement("input");
  const validRequired = "1";
  const inValidRequired = "";

  it("should return false if value is empty", () => {
    input.value = inValidRequired;
    expect(rules.required(input)).toBeFalsy();
  });

  it("should return true if value is not empty", () => {
    input.value = validRequired;
    expect(rules.required(input)).toBeTruthy();
  });
});
