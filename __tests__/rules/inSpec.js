/**
 * @jest-environment jsdom
 */

import rules from "../../src/rules";

describe("inArray", () => {
  const valid = "abc";
  const invalid = "def";
  const array = "(abc,fhi,gedf)";
  const input = document.createElement("input");

  it("should return true if input contains string", () => {
    input.value = valid;
    expect(rules.inArray(input, array)).toBeTruthy();
  });

  it("should return false if input doesn't contain string", () => {
    input.value = invalid;
    expect(rules.inArray(input, array)).toBeFalsy();
  });
});
