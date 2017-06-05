import constants from './constants';

module.exports = (input, rule, isValid, text) => {
    let specificErrorClass = `has-error-${rule}`;
    let specificHelpBlock = input.parentElement.getElementsByClassName(specificErrorClass)[0];

    if (isValid) {

        if (specificHelpBlock) {
            input.parentNode.classList.remove(constants.CLASS_ERROR);
            input.parentNode.removeChild(specificHelpBlock);
        }

    } else {

        if (! specificHelpBlock) {
            input.parentNode.classList.add(constants.CLASS_ERROR);
            specificHelpBlock = document.createElement(constants.ELEMENT_HELP_BLOCK);
            input.parentNode.appendChild(specificHelpBlock);
            specificHelpBlock.classList.add(constants.CLASS_HELP_BLOCK, specificErrorClass);
            specificHelpBlock.textContent = text;
        }
    }
};
