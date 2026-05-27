import type { RuleInput } from "./types";

/**
 * @since 2.3.0
 * @error Enter letters only
 * @description Require Latin letters, accented Latin letters, spaces, apostrophes, and hyphens.
 */
export default function text(input: RuleInput) {
  return /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/.test(input.value);
}
