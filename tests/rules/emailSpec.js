/**
 * @jest-environment jsdom
 */

import rules from "../../src/rules";

describe("email", () => {
  const input = document.createElement("input");
  const validEmail = "mail@example.org";
  const inValidEmail = "mail@example";

  it("should return false if value is not an email", () => {
    input.value = inValidEmail;
    expect(rules.email(input)).toBeFalsy();
  });

  it("should return true if value is an email", () => {
    input.value = validEmail;
    expect(rules.email(input)).toBeTruthy();
  });
});
