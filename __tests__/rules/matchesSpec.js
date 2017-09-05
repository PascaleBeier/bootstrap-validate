import { matches } from "./../../src/rules";

describe("matches", () => {
  const valid = "Name";
  const invalid = "AAAa   ss224";

  matchingInput.value = valid;
  input.value = valid;

  const input = document.createElement("input");
  const matchingInput = document.createElement("input");

  it("should return true if input the input value matches the given input value.", () => {
    expect(matches(input, matchingInput)).toBeTruthy();
  });

  it("should return false if input the input value does not match the given input value.", () => {
    matchingInput.value = invalid;

    expect(matches(input, matchingInput)).toBeFalsy();
  });
});
