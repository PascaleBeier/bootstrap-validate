import type { RuleInput } from "./types";

/**
 * @since 1.0.10
 * @error Please only enter alphanumeric characters!
 * @description Require alphanumeric input, e.g. 0-9 and a-Z.
 */
export default function alphanum(input: RuleInput) {
  return /^[a-z0-9]+$/i.test(input.value);
}
