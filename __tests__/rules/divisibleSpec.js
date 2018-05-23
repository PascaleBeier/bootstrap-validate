import { divisible } from "../../src/rules";

describe("divisible", () => {
  const input = document.createElement("input");
  const validInputs = [16, 4.2, 4.6, 4.8, "4.4", 777.2];
  const invalidInputs = [4.3, 4.5, 4.7, "4.1"];
  const divisor = 0.2;

  it("should return true if input can be divided through 3", () => {
    validInputs.forEach(validInput => {
      input.value = validInput;
      expect(divisible(input, divisor)).toBeTruthy();
    });
  });

  it("should return false if method is invoked and returns false", () => {
    invalidInputs.forEach(invalidInput => {
      input.value = invalidInput;
      expect(divisible(input, divisor)).toBeFalsy();
    });
  });
});
