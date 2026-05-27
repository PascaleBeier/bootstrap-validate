import type { RuleInput, RuleOption } from "./types";

/**
 * @since 2.3.0
 * @example #secondaryEmail
 * @error Enter at least one email address
 * @param otherInput string: Selector for the field that can satisfy the requirement.
 * @description Require a field unless another field already has a value.
 */
export default function requiredUnless(input: RuleInput, otherInput: RuleOption) {
  const resolvedInput = document.querySelector(String(otherInput)) as RuleInput | null;
  return Boolean(input.value.length || resolvedInput?.value.length);
}
