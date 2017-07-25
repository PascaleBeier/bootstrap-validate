import { max } from "../../src/rules";

describe("max", () => {
  const input = document.createElement("input");
  input.value = "abcd";

  it("should return false if value length is higher", () => {
    expect(max(input, 3)).toBeFalsy();
  });

  it("should handle string arguments", () => {
    expect(max(input, "3")).toBeFalsy();
  });

  it("should return true if value length equals", () => {
    expect(max(input, 4)).toBeTruthy();
  });

  it("should handle string arguments", () => {
    expect(max(input, "4")).toBeTruthy();
  });

  it("should return true if value length is lower", () => {
    expect(max(input, 5)).toBeTruthy();
  });

  it("should handle string arguments", () => {
    expect(max(input, "5")).toBeTruthy();
  });
});
