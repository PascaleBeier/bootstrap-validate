import availableRules from './rules';
import errors from './errors';
import ruleFormatter from './formatters/rule-formatter';
import optionFormatter from './formatters/option-formatter';
import ruleArgumentFormatter from './formatters/rule-argument-formatter';

/**
 * @param input HTMLInputElementesl
 * @param rule string
 */
module.exports = (input, rule) => {
  const formattedRules = ruleFormatter(rule);

  formattedRules.forEach((singleRule) => {
    const options = optionFormatter(singleRule);
    if (!options) {
      errors(input, singleRule, availableRules[singleRule](input), false);
    } else {
      const ruleArgsAndErrorText = ruleArgumentFormatter(optionFormatter(singleRule));

      errors(input, options[0], availableRules[options[0]](input, ...ruleArgsAndErrorText[0]),
        ruleArgsAndErrorText[1]);
    }
  });
};
