import { describe, expect, it } from "vitest";

import { parseRules } from "../src/parser";

const ruleNames = ["required", "email", "regex", "matches", "requiredUnless", "between"];

describe("parseRules", () => {
  it("keeps raw regex pipes when the next segment is not a rule", () => {
    expect(parseRules("regex:([0-9]|0[0-9]|1[0-9]):Invalid", ruleNames)).toEqual([
      {
        name: "regex",
        options: ["([0-9]|0[0-9]|1[0-9])"],
        error: "Invalid",
        key: "regex-0",
      },
    ]);
  });

  it("splits multiple rules and duplicate rule names", () => {
    expect(
      parseRules("regex:[a-z]:Needs lowercase|regex:[A-Z]:Needs uppercase", ruleNames),
    ).toEqual([
      {
        name: "regex",
        options: ["[a-z]"],
        error: "Needs lowercase",
        key: "regex-0",
      },
      {
        name: "regex",
        options: ["[A-Z]"],
        error: "Needs uppercase",
        key: "regex-1",
      },
    ]);
  });

  it("supports escaped rule and option separators", () => {
    expect(parseRules("regex:foo\\|bar\\:baz:Invalid", ruleNames)[0]).toMatchObject({
      name: "regex",
      options: ["foo|bar:baz"],
      error: "Invalid",
    });
  });

  it("preserves regex backslashes", () => {
    expect(parseRules("regex:^1\\d{10}$:Mobile Err", ruleNames)[0].options).toEqual(["^1\\d{10}$"]);
  });

  it("keeps unknown rule segments so runtime can warn and skip", () => {
    expect(parseRules("required:Required|madeup:Nope", ruleNames).map((rule) => rule.name)).toEqual(
      ["required", "madeup"],
    );
  });

  it("drops empty malformed rule segments", () => {
    expect(parseRules("|required:Required", ruleNames).map((rule) => rule.name)).toEqual([
      "required",
    ]);
  });
});
