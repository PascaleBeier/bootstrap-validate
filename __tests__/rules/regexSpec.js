import { regex } from "../../src/rules";

describe("regex", () => {
  const input = document.createElement("input");
  const myRegex = /^[a-z]+$/i;
  const validInput = "asd";
  const invalidInput = "€";

  it("should return true if regex passes.", () => {
    input.value = validInput;
    expect(regex(input, myRegex)).toBeTruthy();
  });

  it("should return false if regex fails.", () => {
    input.value = invalidInput;
    expect(regex(input, myRegex)).toBeFalsy();
  });
});
