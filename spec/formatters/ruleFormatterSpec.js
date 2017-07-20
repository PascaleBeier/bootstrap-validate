import ruleFormatter from "../../src/formatters/rule-formatter";
import { SEPARATOR_RULE } from "../../src/utils/constants";

describe("ruleFormatter", () => {
  it("should always return an array", () => {
    expect(
      ruleFormatter(Math.random().toString(36)) instanceof Array
    ).toBeTruthy();
  });

  it("should return an array of split rules", () => {
    const ruleString = `rule1${SEPARATOR_RULE}rule2${SEPARATOR_RULE}rule3`;

    expect(ruleFormatter(ruleString)).toEqual(["rule1", "rule2", "rule3"]);
  });
});
