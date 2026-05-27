import lte from "lodash/lte";
import parseInt from "lodash/parseInt";

import type { RuleInput, RuleOption } from "./types";

/**
 * @since 1.0.0
 * @example 42
 * @error Please dont enter more than 42 characters!
 * @param max number: Number of maximum characters.
 * @description Maximum character count required.
 */
export default function max(input: RuleInput, max: RuleOption) {
  return lte(input.value.length, parseInt(String(max)));
}
