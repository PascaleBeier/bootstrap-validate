import isFinite from "lodash/isFinite";
import Big from "big.js";

import type { RuleInput, RuleOption } from "./types";

/**
 * @since v2.1.0
 * @example 15
 * @param number Number: Number to Test
 * @error 15 is not divisible by 4.
 * @description Test if input number can be divided by given number and the result is an exact whole number.
 */
export default function divisible(input: RuleInput, number: RuleOption) {
  let lDivisible = false;
  const lNumber = Number(input.value);
  if (isFinite(lNumber)) {
    lDivisible = new Big(lNumber).mod(new Big(Number(number))).toString() === "0";
  }

  return lDivisible;
}
