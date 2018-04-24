import { numeric } from "./../../src/rules";

describe("numeric", () => {
  const validNumbers = ["-1", -1, "0", 0, "0.42", 0.42, ".42"];
  const invalidNumbers = ["bla", "#abcdef", "a00"];
  const input = document.createElement("input");

  it("should return true on a valid number", () => {
    validNumbers.forEach(validNumber => {
      input.value = validNumber;
      expect(numeric(input)).toBeTruthy();
    });
  });

  it("should return false on an invalid number", () => {
    invalidNumbers.forEach(invalidNumber => {
      input.value = invalidNumber;
      expect(numeric(input)).toBeFalsy();
    });
  });
});
