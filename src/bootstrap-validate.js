import availableRules from './rules';
import drawErrors from './errors';
import { SEPARATOR_OPTION, SEPARATOR_RULE } from './constants';
import first from 'lodash/first';
import last from 'lodash/last';
import isFunction from 'lodash/isFunction';
import flatten from 'lodash/flatten';

module.exports = (input, rules, callback) => {
  // Normalize the input parameter to a flat array.
  flatten([input]).forEach(element => {
    // Check for either element or selector.
    const lElement = element.nodeType
      ? element
      : document.querySelector(element);

    lElement.addEventListener('input', () => {
      // Let's extract the rules off of the given rule argument.
      rules.split(SEPARATOR_RULE).forEach(rule => {
        // get an array of [rule, option1, ...]
        const options = rule.split(SEPARATOR_OPTION);

        // invoke the rule, returning boolean
        const isValid = availableRules[first(options)](
          lElement,
          ...options.slice(1)
        );

        // DOM Manipulations to toggle errors.
        drawErrors(lElement, first(options), isValid, last(options));

        // optionally invoke the callback.
        if (isFunction(callback)) callback(isValid);
      });
    });
  });
};

export default module.exports;
