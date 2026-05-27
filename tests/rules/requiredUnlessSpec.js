import { describe, expect, it } from "vitest";

import rules from "../../src/rules";

describe("requiredUnless", () => {
  it("returns false when both inputs are empty", () => {
    document.body.innerHTML = '<input id="other" value="">';
    const input = document.createElement("input");

    expect(rules.requiredUnless(input, "#other")).toBe(false);
  });

  it("returns true when the current input has a value", () => {
    document.body.innerHTML = '<input id="other" value="">';
    const input = document.createElement("input");
    input.value = "me@example.com";

    expect(rules.requiredUnless(input, "#other")).toBe(true);
  });

  it("returns true when the other input has a value", () => {
    document.body.innerHTML = '<input id="other" value="team@example.com">';
    const input = document.createElement("input");

    expect(rules.requiredUnless(input, "#other")).toBe(true);
  });
});
