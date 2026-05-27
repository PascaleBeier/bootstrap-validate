import split from "lodash/split";

import type { RuleInput, RuleOption } from "./types";

/**
 * @since 2.2.0
 * @example (ABC, DEF, GHI)
 * @param string string: Array String (abc, def, ghi)
 * @error Your input must be any of (ABC, DEF, GHI)
 * @description Validate if user input is in given array. Similar to contains, but with an array.
 */
export default function inArray(input: RuleInput, string: RuleOption) {
  const { value } = input;
  const array = split(String(string).replace("(", "").replace(")", "").trim(), ",");

  return array.includes(value);
}
