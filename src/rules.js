module.exports = {
  min: (input, min) => {
    /**
     * @since 1.0.0
     * @example 20
     * @error Enter at least 20 characters!
     * @param min number: Number of minimum characters.
     * @description Require a given minimum character count.
     */
    return input.value.length >= parseInt(min, 10);
  },
  max: (input, max) => {
    /**
     * @since 1.0.0
     * @example 42
     * @error Please dont enter more than 42 characters!
     * @param max number: Number of maximum characters.
     * @description Maximum character count required.
     */
    return input.value.length <= parseInt(max, 10);
  },
  email: input =>
    /**
     * @since 1.0.3
     * @error Enter a valid email address
     * @description Require a valid E-Mail Address.
     */
    new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ).test(input.value),
  required: input =>
    /**
     * @since 1.0.7
     * @error Please fill out this field!
     * @description Require a field to be filled out.
     */
    input.value.length > 0,
  url: input =>
    /**
     * @since 1.0.10
     * @error Please enter a valid URL!
     * @description Require a valid URL.
     */
    new RegExp(
      /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i
    ).test(input.value),
  integer: input => {
    /**
     * @since 1.0.10
     * @error Please fill out this input field!
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
     * @since 1.0.10
     * @description Require a valid numeric input.
     * @example 10
     * @error Please only enter numeric characters!
     */
    !isNaN(parseFloat(input.value)) && isFinite(input.value),
  alphanum: input =>
    /**
     * @since 1.0.10
     * @example 4
     * @error Please only enter alphanumeric characters!
     * @description Require alphanumeric input, e.g. 0-9 and a-Z.
     */
    new RegExp(/^[a-z0-9]+$/i).test(input.value),
  contains: (input, string) => {
    /**
     * @since 1.0.11
     * @param string string: String to appear in the Input Element
     * @description Require the input to contain a given string.
     * @example something
     * @error Your text needs to contain something!
     */
    return input.value.includes(string);
  },
  startsWith: (input, string) => {
    /**
     * @since 1.1.0
     * @param string string: String the input value should start with
     * @example +49
     * @error Your phone number needs to start with +49
     * @description Require the input value to start with a given string.
     */
    return input.value.toString().substr(0, string.length) === string;
  },
  endsWith: (input, string) => {
    /**
     * @since 1.1.0
     * @example UCV
     * @error Your Input needs to end with UCV
     * @param string string: String the input value should end with
     * @description Require the input value to end with a given string.
     */
    return (
      input.value
        .toString()
        .substr(input.value.length - string.length, string.length) === string
    );
  },
  matches: (input, matchingInput) => {
    /**
     * @since 1.1.0
     * @example #passwordConfirm
     * @error Your passwords should match
     * @param matchingInput string: The input element to match against
     * @description Require the input value to match the given inputs value. Like bootstrapValidate's first Parameter, you can pass a selector or Element.
     */
    let lMatchingInput = matchingInput;

    if (typeof lMatchingInput.nodeType == "undefined") {
      lMatchingInput = document.querySelector(input);
    }

    return input.value === lMatchingInput.value;
  }
};

export default module.exports;
