import type { RuleInput, RuleOption } from "./types";

/**
 * @since v2.1.0
 * @example ^[a-z]+$
 * @param regex regex: Regex to validate
 * @error Please fulfill my regex
 * @description Test a Regular Expression against an input value
 */
export default function regex(input: RuleInput, regex: RuleOption) {
  return new RegExp(regex instanceof RegExp ? regex : String(regex)).test(input.value);
}
