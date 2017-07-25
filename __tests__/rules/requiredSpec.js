import { required } from "../../src/rules";

describe("required", () => {
  const input = document.createElement("input");
  const validRequired = "1";
  const inValidRequired = "";

  it("should return false if value is empty", () => {
    input.value = inValidRequired;
    expect(required(input)).toBeFalsy();
  });

  it("should return true if value is not empty", () => {
    input.value = validRequired;
    expect(required(input)).toBeTruthy();
  });
});
