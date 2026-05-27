import { CLASS_ERROR, CLASS_HELP_BLOCK, ELEMENT_HELP_BLOCK } from "./constants";

const inputErrorIds = new WeakMap<HTMLElement, string>();
let nextInputErrorId = 0;

function getInputErrorId(input: HTMLElement) {
  const existingId = inputErrorIds.get(input);
  if (existingId) return existingId;

  const id = String(nextInputErrorId);
  nextInputErrorId += 1;
  inputErrorIds.set(input, id);
  return id;
}

function hasVisibleInputError(parent: ParentNode, inputErrorId: string) {
  return Array.from(parent.querySelectorAll<HTMLElement>(`.${CLASS_HELP_BLOCK}`)).some(
    (helpBlock) =>
      helpBlock.style.display !== "none" &&
      Array.from(helpBlock.classList).some((className) => className.endsWith(`-${inputErrorId}`)),
  );
}

export default function errors(
  input: HTMLElement,
  rule: string,
  isValid: unknown,
  text: string,
  ruleKey = rule,
) {
  const inputErrorId = getInputErrorId(input);
  const specificErrorClass = `has-error-${ruleKey}-${inputErrorId}`;
  const formGroup = input.closest(".form-group") || input.parentNode;
  if (!formGroup) return;

  const errorParent = input.parentNode;
  let specificHelpBlock = errorParent?.querySelector<HTMLElement>(`.${specificErrorClass}`);

  if (isValid) {
    // Element is valid, continue
    if (specificHelpBlock) {
      // Element already has an error element which we can safely remove.
      specificHelpBlock.style.display = "none";
      if (errorParent && !hasVisibleInputError(errorParent, inputErrorId)) {
        input.classList.remove(CLASS_ERROR);
      }
    }
  } else {
    // Not Valid!
    if (specificHelpBlock) {
      // Element also has an error element.
      specificHelpBlock.textContent = text;
      specificHelpBlock.style.display = "inline-block";
    } else {
      specificHelpBlock = document.createElement(ELEMENT_HELP_BLOCK);
      input.parentNode?.appendChild(specificHelpBlock);
      specificHelpBlock.style.display = "inline-block";
      specificHelpBlock.classList.add(CLASS_HELP_BLOCK, specificErrorClass);
      specificHelpBlock.textContent = text;
    }
    // The parent Element needs to contain the error class.
    if (!input.classList.contains(CLASS_ERROR)) {
      // So we'll just add the class if it is absent.
      input.classList.add(CLASS_ERROR);
    }
  }
}
