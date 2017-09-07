import { alpha } from "./../../src/rules";

describe("alpha", () => {
  const validAlpha = "AAaaa";
  const invalidAlpha = "AAAa   ss224";
  const input = document.createElement("input");

  it("should return true on alphabetic input", () => {
    input.value = validAlpha;
    expect(alpha(input)).toBeTruthy();
  });

  it("should return false on non alphabetic input", () => {
    input.value = invalidAlpha;
    expect(alpha(input)).toBeFalsy();
  });
});
