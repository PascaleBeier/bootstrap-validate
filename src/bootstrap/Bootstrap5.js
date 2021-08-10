const Bootstrap5 = {
  classListError: 'is-invalid',
  elementHelpBlock: 'div',
  classListHelpBlock: 'invalid-feedback',
  dom: {
    renderValidationSuccess: (elFormField, rule) => {
      const specificErrorClass = `has-error-${rule}`;
      const formGroup =
        elFormField.closest('.form-group') || elFormField.parentNode;
      const specificHelpBlock = formGroup.querySelector(
        `.${specificErrorClass}`
      );

      if (specificHelpBlock) {
        // Element already has an error element which we can safely remove.
        elFormField.classList.remove(Bootstrap5.classListError);
        specificHelpBlock.style.display = 'none';
      }
    },
    renderValidationErrors: (elFormField, rule, errorMessage) => {
      const specificErrorClass = `has-error-${rule}`;
      const formGroup =
        elFormField.closest('.form-group') || elFormField.parentNode;
      let specificHelpBlock = formGroup.querySelector(`.${specificErrorClass}`);

      if (specificHelpBlock) {
        // Element also has an error element.
        specificHelpBlock.innerHTML = errorMessage;
        specificHelpBlock.style.display = 'inline-block';
      } else {
        specificHelpBlock = document.createElement(Bootstrap5.elementHelpBlock);
        elFormField.parentNode.appendChild(specificHelpBlock);
        specificHelpBlock.style.display = 'inline-block';
        specificHelpBlock.classList.add(
          Bootstrap5.classListHelpBlock,
          specificErrorClass
        );
        specificHelpBlock.innerHTML = errorMessage;
      }
      // The parent Element needs to contain the error class.
      if (!elFormField.classList.contains(Bootstrap5.classListError)) {
        // So we'll just add the class if it is absent.
        elFormField.classList.add(Bootstrap5.classListError);
      }
    },
  },
};

export default Bootstrap5;
