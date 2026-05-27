import endsWith from "lodash/endsWith";

import type { RuleInput, RuleOption } from "./types";

/**
 * @since 1.1.0
 * @example UCV
 * @error Your Input needs to end with UCV
 * @param string string: String the input value should end with
 * @description Require the input value to end with a given string.
 */
export default function endsWithRule(input: RuleInput, string: RuleOption) {
  return endsWith(input.value, String(string));
}
