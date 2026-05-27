import startsWith from "lodash/startsWith";

import type { RuleInput, RuleOption } from "./types";

/**
 * @since 1.1.0
 * @param string string: String the input value should start with
 * @example +49
 * @error Your phone number needs to start with +49
 * @description Require the input value to start with a given string.
 */
export default function startsWithRule(input: RuleInput, string: RuleOption) {
  return startsWith(input.value, String(string));
}
