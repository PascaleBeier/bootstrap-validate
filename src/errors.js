import constants from './constants';
import nativeRules from './native-rules';

module.exports = (input, rule, isValid, text) => {
  const isNative = nativeRules.includes(rule) && typeof document.createElement('input').checkValidity === 'function';
  const specificErrorClass = `has-error-${rule}`;
  let specificHelpBlock = input.parentElement.getElementsByClassName(specificErrorClass)[0];

  if (isValid) {
    // Element is valid, continue
    if (specificHelpBlock) {
      // Element already has an error element, continue
      input.parentNode.classList.remove(constants.CLASS_ERROR);
      input.parentNode.removeChild(specificHelpBlock);
    }
  } else {
    if (!input.parentNode.classList.contains(constants.CLASS_ERROR)) {
      input.parentNode.classList.add(constants.CLASS_ERROR);
    }// Element is not valid, continue
    if (specificHelpBlock) {
        // Element also has an error element.
      if (isNative) {
        specificHelpBlock.textContent = input.validationMessage;
      } else {
        specificHelpBlock.textContent = text;
      }
    } else {
      specificHelpBlock = document.createElement(constants.ELEMENT_HELP_BLOCK);
      input.parentNode.appendChild(specificHelpBlock);
      specificHelpBlock.classList.add(constants.CLASS_HELP_BLOCK, specificErrorClass);
      if (isNative) {
        specificHelpBlock.textContent = input.validationMessage;
      } else {
        specificHelpBlock.textContent = text;
      }
    }
  }
};
