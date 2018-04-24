import { integer } from "./../../src/rules";

describe("integer", () => {
  const validIntegers = ["5", 4];
  const invalidIntegers = ["4.2", 4.2, "00aa"];
  const input = document.createElement("input");

  it("should return true on a valid integer", () => {
    validIntegers.forEach(validInteger => {
      input.value = validInteger;
      expect(integer(input)).toBeTruthy();
    });
  });

  it("should return false on an invalid integer", () => {
    invalidIntegers.forEach(invalidInteger => {
      input.value = invalidInteger;
      expect(integer(input)).toBeFalsy();
    });
  });
});
