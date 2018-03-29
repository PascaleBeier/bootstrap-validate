import { startsWith } from "./../../src/rules";

describe("startsWith", () => {
  const valid = "Name";
  const invalid = "AAAa   ss224";
  const input = document.createElement("input");
  input.value = "Name asdasd";

  it("should return true if input starts with the given string", () => {
    expect(startsWith(input, valid)).toBeTruthy();
  });

  it("should return false if input doesn't start with the given string", () => {
    expect(startsWith(input, invalid)).toBeFalsy();
  });
});
