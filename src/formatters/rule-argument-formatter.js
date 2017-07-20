import availableRules from "../rules";

/**
 * @param options Array
 * @returns {[*,*]}
 */
module.exports = options => {
  const ruleArgs = options;
  const ruleArgC = availableRules[ruleArgs[0]].length;
  let errorText;
  if (options.length === ruleArgC + 1) {
    errorText = options[options.length - 1];
    ruleArgs.shift();
    ruleArgs.pop();
  } else if (options.length === ruleArgC) {
    ruleArgs.pop();
  }

  return [ruleArgs, errorText];
};

export default module.exports;
