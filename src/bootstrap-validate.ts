import isFunction from "lodash/isFunction";
import flatten from "lodash/flatten";
import rules from "./rules";
import errors from "./errors";
import { SEPARATOR_OPTION, SEPARATOR_RULE, LISTENER } from "./constants";
import type { RuleOption } from "./rules";

type RuleInput = HTMLInputElement | HTMLTextAreaElement;
type ValidationTarget = RuleInput | string;
type CallableRule = (input: RuleInput, ...options: RuleOption[]) => unknown;

function resolveInput(input: ValidationTarget): RuleInput {
  return typeof input === "string" ? (document.querySelector(input) as RuleInput) : input;
}

export default function bootstrapValidate(
  input: ValidationTarget | ValidationTarget[],
  string: string,
  callback?: (isValid: unknown) => void,
) {
  // Normalize the input parameter to a flat array.
  flatten([input]).forEach((element) => {
    // Check for either element or selector.
    const resolvedElement = resolveInput(element as ValidationTarget);

    resolvedElement.addEventListener(LISTENER, () => {
      // Let's extract the rules off of the given rule argument.
      string.split(SEPARATOR_RULE).forEach((rule) => {
        // get an array of [rule, option1, ...]
        let options: RuleOption[] = rule.split(SEPARATOR_OPTION);
        // Take rule name from options.
        const ruleName = options.shift() as keyof typeof rules;
        // Take Error Text from options.
        const errorText = String(options.pop());
        // Sometimes, we need to take special care of options.
        // Allow the use of the colon in the regex options.
        if (ruleName === "regex") {
          // Reduce the options array to its first and last element.
          options = [options.join(SEPARATOR_OPTION)];
        }

        // invoke the rule, returning boolean
        const ruleFunction = rules[ruleName] as CallableRule;
        const validity = ruleFunction(resolvedElement, ...options);

        // DOM Manipulations to toggle errors.
        errors(resolvedElement, ruleName, validity, errorText);

        // optionally invoke the callback.
        if (isFunction(callback)) callback(validity);
      });
    });
  });
}
