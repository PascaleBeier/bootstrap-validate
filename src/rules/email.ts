import type { RuleInput } from "./types";

/**
 * @since 1.0.3
 * @error Enter a valid email address
 * @description Require a valid E-Mail Address.
 */
export default function email(input: RuleInput) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    input.value,
  );
}
