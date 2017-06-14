module.exports = {
  /**
     * @param input HTMLInputElement
     * @param min number
     */
  min: (input, min) => input.value.length >= parseInt(min, 10),
  /**
     * @param input HTMLInputElement
     * @param max number
     */
  max: (input, max) => input.value.length <= parseInt(max, 10),
  /**
     * @param input HTMLInputElement
     */
  email: (input) => {
    let isValid;
    // To get native validation, we just need to set the 'type' attribute to 'email'.
    // If none is given or this equals 'text' we can safely override that.
    if (!input.hasAttribute('type') || input.getAttribute('type') === 'text') {
      input.setAttribute('type', 'email');
      // If we got this far, we can just return the native validity.
      isValid = input.valid;
    } else {
      isValid = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(input.value);
    }
    return isValid;
  },
};
