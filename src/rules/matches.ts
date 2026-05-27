import type { RuleInput } from "./types";

/**
 * @since 1.1.0
 * @example #passwordConfirm
 * @error Your passwords should match
 * @param matchingInput string: The input element to match against
 * @description Require the input value to match the given inputs value. Like bootstrapValidate's first Parameter, you can pass a selector or Element.
 */
export default function matches(input: RuleInput, matchingInput: string | number | RuleInput) {
  let resolvedInput: RuleInput | null;

  if (typeof matchingInput === "object" && typeof matchingInput.nodeType !== "undefined") {
    resolvedInput = matchingInput;
  } else {
    resolvedInput = document.querySelector(String(matchingInput)) as RuleInput | null;
  }

  return Boolean(resolvedInput) && input.value === resolvedInput?.value;
}
