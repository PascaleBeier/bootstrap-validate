import availableRules from "./rules";
import drawErrors from "./errors";
import ruleFormatter from "./formatters/rule-formatter";
import optionFormatter from "./formatters/option-formatter";
import ruleArgumentFormatter from "./formatters/rule-argument-formatter";

/**
 * @param input HTMLInputElement
 * @param rule string
 */
module.exports = (input, rule) => {
  // Let's extract the rules off of the given rule argument.
  const formattedRules = ruleFormatter(rule);

  // formattedRules holds an array of Rules. Now let's
  // take necessary actions for each rule.
  formattedRules.forEach(singleRule => {
    // First off, we are going to extract options off of a rule.
    const options = optionFormatter(singleRule);
    // The optionFormatter() returns false with no options supplied.
    if (!options) {
      // The current behaviour is taking the absence of option for
      // granted and trying to call the underlying rule function.
      drawErrors(input, singleRule, availableRules[singleRule](input), false);
    } else {
      // Now we will map each option to the function signature.
      // I like calling it dynamic argument resolution.
      // Sounds bossy.
      const ruleArgsAndErrorText = ruleArgumentFormatter(
        optionFormatter(singleRule)
      );

      // Now we are holding an array of two keys:
      // The rule arguments and the error text.
      // And we are good to go.
      drawErrors(
        input,
        options[0],
        availableRules[options[0]](input, ...ruleArgsAndErrorText[0]),
        ruleArgsAndErrorText[1]
      );
    }
  });
};

export default module.exports;
