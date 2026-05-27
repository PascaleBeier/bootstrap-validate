import isFinite from "lodash/isFinite";

import type { RuleInput } from "./types";

/**
 * @since 1.0.10
 * @description Require a valid numeric input.
 * @error Please only enter numeric characters!
 */
export default function numeric(input: RuleInput) {
  return isFinite(Number(input.value));
}
