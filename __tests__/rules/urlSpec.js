import { url } from "./../../src/rules";

describe("url", () => {
  const validUrl = "https://example.org";
  const invalidUrl = "example";
  const input = document.createElement("input");

  it("should return true on a valid url", () => {
    input.value = validUrl;
    expect(url(input)).toBeTruthy();
  });

  it("should return false on an valid url", () => {
    input.value = invalidUrl;
    expect(url(input)).toBeFalsy();
  });
});
