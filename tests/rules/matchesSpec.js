/**
 * @jest-environment jsdom
 */

import rules from "../../src/rules";

describe("matches", () => {
  const valid = "Name";
  const invalid = "AAAa   ss224";

  const input = document.createElement("input");
  const matchingInput = document.createElement("input");

  matchingInput.value = valid;
  input.value = valid;

  it("should return true if input the input value matches the given input value.", () => {
    expect(rules.matches(input, matchingInput)).toBeTruthy();
  });

  it("should return false if input the input value does not match the given input value.", () => {
    matchingInput.value = invalid;

    expect(rules.matches(input, matchingInput)).toBeFalsy();
  });
});
