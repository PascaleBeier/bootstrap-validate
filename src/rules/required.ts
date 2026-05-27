import type { RuleInput } from "./types";

/**
 * @since 1.0.7
 * @error Please fill out this field!
 * @description Require a field to be filled out.
 */
export default function required(input: RuleInput) {
  return input.value.length && input.value.length > 0;
}
