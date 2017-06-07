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
    if (!input.hasAttribute('type')) {
      input.setAttribute('type', 'email');
      isValid = input.valid;
    } else {
      isValid = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(input.value);
    }
    return isValid;
  },
};
