import type { RuleInput } from "./types";

/**
 * @since v2.1.0
 * @error Your input does not match the wanted format YYYY-MM-DD
 * @description Validate user input against ISO 8601 Format.
 */
export default function ISO8601(input: RuleInput) {
  return /^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/.test(input.value);
}
