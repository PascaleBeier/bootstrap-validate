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
  email: input =>
    new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ).test(input.value),
  /**
   * @param input HTMLInputElement
   */
  required: input => input.value.length > 0,
  /**
   * The perfect URL Validation RegEx by @diegoperini
   *
   * @param input HTMLInputElement
   */
  url: input =>
    new RegExp(
      /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i
    ).test(input.value)
};

export default module.exports;
