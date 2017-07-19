import {
  CLASS_ERROR,
  CLASS_LABEL,
  CLASS_HELP_BLOCK,
  ELEMENT_HELP_BLOCK
} from "./utils/constants";

module.exports = (input, rule, isValid, text) => {
  const specificErrorClass = `has-error-${rule}`;
  const parent = input.parentNode;
  const label = parent.querySelector("label");
  let specificHelpBlock = parent.querySelector(`.${specificErrorClass}`);

  if (isValid) {
    // Element is valid, continue
    if (specificHelpBlock) {
      // Element already has an error element which we can safely remove.
      input.parentNode.classList.remove(CLASS_ERROR);
      specificHelpBlock.style.display = "none";
    }
  } else {
    // Not Valid!
    if (label) {
      // Element does have a label
      if (!label.classList.contains(CLASS_LABEL)) {
        // Which doesn't contain the formatting class, so we'll add it.
        label.classList.add(CLASS_LABEL);
      }
    }
    if (specificHelpBlock) {
      // Element also has an error element.
      specificHelpBlock.textContent = text;
      specificHelpBlock.style.display = "block";
    } else {
      specificHelpBlock = document.createElement(ELEMENT_HELP_BLOCK);
      input.parentNode.appendChild(specificHelpBlock);
      specificHelpBlock.classList.add(CLASS_HELP_BLOCK, specificErrorClass);
      specificHelpBlock.textContent = text;
    }
    // The parent Element needs to contain the error class.
    if (!parent.classList.contains(CLASS_ERROR)) {
      // So we'll just add the class if it is absent.
      parent.classList.add(CLASS_ERROR);
    }
  }
};

export default module.exports;
