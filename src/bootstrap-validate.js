import isFunction from "lodash/isFunction";
import flatten from "lodash/flatten";
import rules from "./rules";
import feedback from "./errors";
import { SEPARATOR_OPTION, SEPARATOR_RULE, LISTENER } from "./constants";

module.exports = (input, string, callback) => {
  // Normalize the input parameter to a flat array.
  flatten([input]).forEach(element => {
    // Check for either element or selector.
    element = element.nodeType ? element : document.querySelector(element);

    element.addEventListener(LISTENER, () => {
      // Let's extract the rules off of the given rule argument.
      string.split(SEPARATOR_RULE).forEach(rule => {
        // get an array of [rule, option1, ...]
        let options = rule.split(SEPARATOR_OPTION);
        // Take rule name from options.
        const ruleName = options.shift();
        // Take Error Text from options.
        const errorText = options.pop();
        // Sometimes, we need to take special care of options.
        // Allow the use of the colon in the regex options.
        if (ruleName === "regex") {
          // Reduce the options array to its first and last element.
          options = [options.join(SEPARATOR_OPTION)];
        }

        // invoke the rule, returning boolean
        const validity = rules[ruleName](element, ...options);

        // DOM Manipulations to toggle errors.
        feedback(element, ruleName, validity, errorText);

        // optionally invoke the callback.
        if (isFunction(callback)) callback(validity);
      });
    });
  });
};

export default module.exports;
