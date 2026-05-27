import type { RuleInput, RuleOption } from "./types";

/**
 * @since 1.0.11
 * @param string string: String to appear in the Input Element
 * @description Require the input to contain a given string.
 * @example something
 * @error Your text needs to contain something!
 */
export default function contains(input: RuleInput, string: RuleOption) {
  return input.value.includes(String(string));
}
