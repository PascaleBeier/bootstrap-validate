import { min } from "../../src/rules";

describe("min", () => {
  const input = document.createElement("input");
  input.value = "abcd";

  it("should return true if value length equals", () => {
    expect(min(input, 4)).toBeTruthy();
  });

  it("should be able to take string parameters", () => {
    expect(min(input, "4")).toBeTruthy();
  });

  it("should return false if value length is lower", () => {
    expect(min(input, 5)).toBeFalsy();
  });

  it("should be able to take string parameters", () => {
    expect(min(input, "5")).toBeFalsy();
  });

  it("should return true if value length is higher", () => {
    expect(min(input, 3)).toBeTruthy();
  });

  it("should be able to take string parameters", () => {
    expect(min(input, "3")).toBeTruthy();
  });
});
