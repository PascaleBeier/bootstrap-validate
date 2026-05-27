import gte from "lodash/gte";
import parseInt from "lodash/parseInt";

import type { RuleInput, RuleOption } from "./types";

/**
 * @since 1.0.0
 * @example 20
 * @error Enter at least 20 characters!
 * @param min number: Number of minimum characters.
 * @description Require a given minimum character count.
 */
export default function min(input: RuleInput, min: RuleOption) {
  return gte(input.value.length, parseInt(String(min)));
}
