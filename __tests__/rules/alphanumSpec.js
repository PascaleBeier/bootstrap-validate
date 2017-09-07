import { alphanum } from "./../../src/rules";

describe("alphanum", () => {
  const validAlphanumeric = "AAaaa2101202";
  const invalidAlphanumeric = "AAAa   ss224";
  const input = document.createElement("input");

  it("should return true on alphanumeric input", () => {
    input.value = validAlphanumeric;
    expect(alphanum(input)).toBeTruthy();
  });

  it("should return false on non alphanumeric input", () => {
    input.value = invalidAlphanumeric;
    expect(alphanum(input)).toBeFalsy();
  });
});
