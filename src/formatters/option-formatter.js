import { SEPARATOR_OPTION } from "../utils/constants";

/**
 * @param singleRuleString
 * @returns {boolean|Array}
 */
module.exports = singleRuleString => {
  const splitOptionsString = singleRuleString.split(SEPARATOR_OPTION);

  // If this equals 1, no options are provided.
  // Other than that, we got a working array of [rule, ... options].
  return splitOptionsString.length === 1 ? false : splitOptionsString;
};

export default module.exports;
