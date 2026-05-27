import isFunction from "lodash/isFunction";
import flatten from "lodash/flatten";
import rules from "./rules";
import errors from "./errors";
import { LISTENER } from "./constants";
import { parseRules, type ParsedRule } from "./parser";

export type RuleInput = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
export type RuleOption = RegExp | string | number;
export type RuleResult = boolean | number | string;
export type ValidationRule = (input: RuleInput, ...options: RuleOption[]) => RuleResult;
type ValidationTarget = RuleInput | string;
type ValidationCallback = (isValid: unknown) => void;
type RuleRegistry = Record<string, ValidationRule>;

export interface ValidationHandle {
  element: RuleInput;
  validate: () => boolean;
  destroy: () => void;
}

export interface BootstrapValidate {
  (
    input: ValidationTarget | ValidationTarget[],
    string: string,
    callback?: ValidationCallback,
  ): ValidationHandle | ValidationHandle[];
  extendRule: (name: string, rule: ValidationRule) => void;
}

const ruleRegistry = rules as RuleRegistry;

function resolveInput(input: ValidationTarget): RuleInput | null {
  return typeof input === "string" ? (document.querySelector(input) as RuleInput | null) : input;
}

function isRequiredRule(rule: ParsedRule) {
  return rule.name === "required" || rule.name === "requiredUnless";
}

function shouldSkipOptionalRule(input: RuleInput, rule: ParsedRule) {
  return !isRequiredRule(rule) && input.value.length === 0;
}

function warn(message: string) {
  if (typeof console !== "undefined" && isFunction(console.warn)) {
    console.warn(`[bootstrap-validate] ${message}`);
  }
}

function runRule(input: RuleInput, rule: ParsedRule) {
  const ruleFunction = ruleRegistry[rule.name];
  if (!ruleFunction) {
    warn(`Unknown rule "${rule.name}" skipped.`);
    return true;
  }

  if (shouldSkipOptionalRule(input, rule)) return true;

  try {
    return ruleFunction(input, ...rule.options);
  } catch (error) {
    warn(`Rule "${rule.name}" failed: ${error instanceof Error ? error.message : String(error)}`);
    return false;
  }
}

function getListenerEvents(input: RuleInput) {
  return input instanceof HTMLSelectElement ? [LISTENER, "change"] : [LISTENER];
}

function getDependentInput(rule: ParsedRule) {
  if (rule.name !== "matches" && rule.name !== "requiredUnless") return null;
  const [selector] = rule.options;
  if (!selector) return null;
  return document.querySelector(String(selector)) as RuleInput | null;
}

function createHandle(
  input: RuleInput,
  rulesString: string,
  callback?: ValidationCallback,
): ValidationHandle {
  const parsedRules = parseRules(rulesString, Object.keys(ruleRegistry));
  const removers: Array<() => void> = [];

  const validate = () => {
    let isValid = true;

    parsedRules.forEach((rule) => {
      const validity = runRule(input, rule);
      isValid = Boolean(validity) && isValid;
      errors(input, rule.name, validity, rule.error, rule.key);

      if (isFunction(callback)) callback(validity);
    });

    return isValid;
  };

  getListenerEvents(input).forEach((eventName) => {
    input.addEventListener(eventName, validate);
    removers.push(() => input.removeEventListener(eventName, validate));
  });

  parsedRules.forEach((rule) => {
    const dependentInput = getDependentInput(rule);
    if (!dependentInput) return;

    getListenerEvents(dependentInput).forEach((eventName) => {
      dependentInput.addEventListener(eventName, validate);
      removers.push(() => dependentInput.removeEventListener(eventName, validate));
    });
  });

  return {
    element: input,
    validate,
    destroy() {
      removers.splice(0).forEach((remove) => remove());
    },
  };
}

const bootstrapValidate = ((input, string, callback) => {
  const handles = flatten([input])
    .map((element) => {
      const resolvedElement = resolveInput(element as ValidationTarget);
      if (!resolvedElement) {
        warn(`Input "${String(element)}" was not found.`);
        return null;
      }

      return createHandle(resolvedElement, string, callback);
    })
    .filter((handle): handle is ValidationHandle => Boolean(handle));

  return Array.isArray(input) ? handles : handles[0];
}) as BootstrapValidate;

bootstrapValidate.extendRule = (name, rule) => {
  if (!/^[A-Za-z][A-Za-z0-9]*$/.test(name)) {
    throw new Error(`Invalid rule name "${name}".`);
  }

  ruleRegistry[name] = rule;
};

export default bootstrapValidate;
