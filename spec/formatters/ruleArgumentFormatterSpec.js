import ruleArgumentFormatter from "../../src/formatters/rule-argument-formatter";

describe("ruleArgumentFormatter", () => {
  it("should return an array of [... options, errorText]", () => {
    const ruleArgumentString = ["max", "10", "Enter 10 Characters at most!"];
    expect(ruleArgumentFormatter(ruleArgumentString)).toEqual([
      ["10"],
      "Enter 10 Characters at most!"
    ]);
  });
});
