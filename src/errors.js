import constants from './constants';
import nativeRules from './native-rules';

module.exports = (input, rule, isValid, text) => {
  const isNative = nativeRules.includes(rule) && typeof document.createElement('input').checkValidity === 'function';
  const specificErrorClass = `has-error-${rule}`;
  const parent = input.parentNode;
  const label = parent.querySelector('label');
  let specificHelpBlock = parent.querySelector(`.${specificErrorClass}`);

  if (isValid) {
    // Element is valid, continue
    if (specificHelpBlock) {
      // Element already has an error element which we can safely remove.
      input.parentNode.classList.remove(constants.CLASS_ERROR);
      input.parentNode.removeChild(specificHelpBlock);
    }
  } else {
    // Not Valid!
    if (label) {
      // Element does have a label
      if (!label.classList.contains(constants.CLASS_LABEL)) {
        // Which doesn't contain the formatting class, so we'll add it.
        label.classList.add(constants.CLASS_LABEL);
      }
    }
    // The parent Element needs to contain the error class.
    if (!parent.classList.contains(constants.CLASS_ERROR)) {
      // So we'll just add the class if it is absent.
      parent.classList.add(constants.CLASS_ERROR);
    }
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
