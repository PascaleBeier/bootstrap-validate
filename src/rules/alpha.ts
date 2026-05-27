import isString from "lodash/isString";

import type { RuleInput } from "./types";

/**
 * @since 1.1.0
 * @error You can only input alphabetic characters
 * @description Validate only alphabetic characters - a-z, A-Z.
 */
export default function alpha(input: RuleInput) {
  return isString(input.value) && /^[a-z]+$/i.test(input.value);
}
