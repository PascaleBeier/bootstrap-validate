module.exports = {
  min: (input, min) => {
    /**
     * @param min number: Number of minimum characters.
     * @description Require a given minimum character count.
     */
    return input.value.length >= parseInt(min, 10);
  },
  max: (input, max) => {
    /**
     * @param max number: Number of maximum characters.
     * @description Maximum character count required.
     */
    return input.value.length <= parseInt(max, 10);
  },
  email: input =>
    /**
     * @description Require a valid E-Mail Address.
     */
    new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ).test(input.value),
  required: input =>
    /**
     * @description Require a field to be filled out.
     */
    input.value.length > 0,
  url: input =>
    /**
     * @description Require a valid URL.
     */
    new RegExp(
      /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i
    ).test(input.value),
  integer: input => {
    /**
     * @description Require a valid integer.
     */
    if (isNaN(input.value)) {
      return false;
    }
    const x = parseFloat(input.value);

    return (x | 0) === x; // eslint-disable-line no-bitwise
  },
  numeric: input =>
    /**
     * @description Require a valid numeric input.
     */
    !isNaN(parseFloat(input.value)) && isFinite(input.value),
  alphanum: input =>
    /**
     * @description Require alphanumeric input, e.g. 0-9 and a-Z.
     */
    new RegExp(/^[a-z0-9]+$/i).test(input.value),
  contains: (input, string) => {
    /**
     * @param string string: String to appear in the Input Element
     * @description Require the input to contain a given string.
     */
    return input.value.includes(string);
  }
};

export default module.exports;
