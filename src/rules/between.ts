import Big from "big.js";
import isFinite from "lodash/isFinite";

import type { RuleInput, RuleOption } from "./types";

/**
 * @since 2.3.0
 * @example 18:65
 * @error Enter a number between 18 and 65
 * @param min number: Inclusive minimum value.
 * @param max number: Inclusive maximum value.
 * @description Require a numeric value between two inclusive bounds.
 */
export default function between(input: RuleInput, min: RuleOption, max: RuleOption) {
  const value = Number(input.value);
  const minimum = Number(min);
  const maximum = Number(max);

  if (!isFinite(value) || !isFinite(minimum) || !isFinite(maximum)) return false;

  const number = new Big(value);
  return number.gte(minimum) && number.lte(maximum);
}
