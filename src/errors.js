import { CLASS_ERROR, CLASS_HELP_BLOCK, ELEMENT_HELP_BLOCK } from "./constants";

module.exports = (input, rule, isValid, text) => {
  const specificErrorClass = `has-error-${rule}`;
  const formGroup = input.closest(".form-group") || input.parentNode;
  let specificHelpBlock = formGroup.querySelector(`.${specificErrorClass}`);

  if (isValid) {
    // Element is valid, continue
    if (specificHelpBlock) {
      // Element already has an error element which we can safely remove.
      input.classList.remove(CLASS_ERROR);
      specificHelpBlock.style.display = "none";
    }
  } else {
    // Not Valid!
    if (specificHelpBlock) {
      // Element also has an error element.
      specificHelpBlock.innerHTML = text;
      specificHelpBlock.style.display = "inline-block";
    } else {
      specificHelpBlock = document.createElement(ELEMENT_HELP_BLOCK);
      input.parentNode.appendChild(specificHelpBlock);
      specificHelpBlock.style.display = "inline-block";
      specificHelpBlock.classList.add(CLASS_HELP_BLOCK, specificErrorClass);
      specificHelpBlock.innerHTML = text;
    }
    // The parent Element needs to contain the error class.
    if (!input.classList.contains(CLASS_ERROR)) {
      // So we'll just add the class if it is absent.
      input.classList.add(CLASS_ERROR);
    }
  }
};

export default module.exports;
