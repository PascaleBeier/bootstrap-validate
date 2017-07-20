import optionFormatter from "../../src/formatters/option-formatter";
import { SEPARATOR_OPTION } from "../../src/utils/constants";

describe("optionFormatter", () => {
  it("should return false with no options supplied", () => {
    const singleRuleString = "rule1";
    expect(optionFormatter(singleRuleString)).toBeFalsy();
  });

  it("should return an array of split options", () => {
    const singleRuleString = `rule1${SEPARATOR_OPTION}option1${SEPARATOR_OPTION}option2`;

    expect(optionFormatter(singleRuleString)).toEqual([
      "rule1",
      "option1",
      "option2"
    ]);
  });
});
