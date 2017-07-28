import availableRules from "./rules";
import drawErrors from "./errors";
import ruleFormatter from "./formatters/rule-formatter";
import optionFormatter from "./formatters/option-formatter";
import ruleArgumentFormatter from "./formatters/rule-argument-formatter";

/**
 * @param input HTMLInputElement
 * @param rule string
 * @param callback ?function
 */
module.exports = (input, rule, callback) => {
  // Let's extract the rules off of the given rule argument.
  const formattedRules = ruleFormatter(rule);

  // formattedRules holds an array of Rules. Now let's
  // take necessary actions for each rule.
  formattedRules.forEach(singleRule => {
    // First off, we are going to extract options off of a rule.
    const options = optionFormatter(singleRule);
    let isValid = false;
    // The optionFormatter() returns false with no options supplied.
    if (!options) {
      // The current behaviour is taking the absence of option for
      // granted and trying to call the underlying rule function.
      isValid = availableRules[singleRule](input);
      drawErrors(input, singleRule, isValid, false);
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
      isValid = availableRules[options[0]](input, ...ruleArgsAndErrorText[0]);

      drawErrors(input, options[0], isValid, ruleArgsAndErrorText[1]);

      if (typeof callback === "function") callback(isValid);
    }
  });
};

export default module.exports;
