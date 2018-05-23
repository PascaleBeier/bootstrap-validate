import { ISO8601 } from "../../src/rules";

describe("ISO8601", () => {
  const input = document.createElement("input");
  const validInput = "2018-10-19";
  const invalidInput = "12.12.1221";

  it("should return true if input is valid ISO 8601", () => {
    input.value = validInput;
    expect(ISO8601(input, validInput)).toBeTruthy();
  });

  it("should return false if input is invalid ISO 8601", () => {
    input.value = invalidInput;
    expect(ISO8601(input, invalidInput)).toBeFalsy();
  });
});
