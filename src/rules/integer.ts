import isInteger from "lodash/isInteger";

import type { RuleInput } from "./types";

/**
 * @since 1.0.10
 * @error Please fill out this input field!
 * @description Require a valid integer.
 */
export default function integer(input: RuleInput) {
  return isInteger(Number(input.value));
}
