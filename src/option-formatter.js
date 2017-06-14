import constants from './constants';

/**
 * @param singleRuleString
 * @returns {boolean|Array}
 */
module.exports = (singleRuleString) => {
  const splitOptionsString = singleRuleString.split(constants.SEPARATOR_OPTION);

  // If this equals 1, no options are provided.
  if (splitOptionsString.length === 1) {
    return false;
  }

  // Other than that, we got a working array of options.
  return splitOptionsString;
};
