import constants from './constants';

/**
 * @param rulesString string
 * @returns {Array}
 */
module.exports = (rulesString) => {
  const splitRuleString = rulesString.split(constants.SEPARATOR_RULE);

  // If this equals 1, only one rule is provided and we can hand out the rule as is.
  if (splitRuleString.length === 1) {
    return [rulesString];
  }

  // Other than that, we got a working array of rules.
  return splitRuleString;
};
