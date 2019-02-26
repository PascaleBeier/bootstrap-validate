import isFinite from "lodash/isFinite";
import parseInt from "lodash/parseInt";
import isInteger from "lodash/isInteger";
import isString from "lodash/isString";
import startsWith from "lodash/startsWith";
import endsWith from "lodash/endsWith";
import trim from "lodash/trim";
import split from "lodash/split";
import gte from "lodash/gte";
import lte from "lodash/lte";
import Big from "big.js";

module.exports = {
  min: (input, min) =>
    /**
     * @since 1.0.0
     * @example 20
     * @error Enter at least 20 characters!
     * @param min number: Number of minimum characters.
     * @description Require a given minimum character count.
     */
    gte(input.value.length, parseInt(min)),
  max: (input, max) =>
    /**
     * @since 1.0.0
     * @example 42
     * @error Please dont enter more than 42 characters!
     * @param max number: Number of maximum characters.
     * @description Maximum character count required.
     */
    lte(input.value.length, parseInt(max)),
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
    input.value.length && input.value.length > 0,
  url: input =>
    /**
     * @since 1.0.10
     * @error Please enter a valid URL!
     * @description Require a valid URL.
     */
    new RegExp(
      /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i
    ).test(input.value),
  integer: input =>
    /**
     * @since 1.0.10
     * @error Please fill out this input field!
     * @description Require a valid integer.
     */
    isInteger(Number(input.value)),
  numeric: input =>
    /**
     * @since 1.0.10
     * @description Require a valid numeric input.
     * @error Please only enter numeric characters!
     */
    isFinite(Number(input.value)),
  alphanum: input =>
    /**
     * @since 1.0.10
     * @error Please only enter alphanumeric characters!
     * @description Require alphanumeric input, e.g. 0-9 and a-Z.
     */
    new RegExp(/^[a-z0-9]+$/i).test(input.value),
  ISO8601: input =>
    /**
     * @since v2.1.0
     * @error Your input does not match the wanted format YYYY-MM-DD
     * @description Validate user input against ISO 8601 Format.
     */
    new RegExp(/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/).test(input.value),
  regex: (input, regex) =>
    /**
     * @since v2.1.0
     * @example ^[a-z]+$
     * @param regex regex: Regex to validate
     * @error Please fulfill my regex
     * @description Test a Regular Expression against an input value
     */
    new RegExp(regex).test(input.value),
  divisible: (input, number) => {
    /**
     * @since v2.1.0
     * @example 15
     * @param number Number: Number to Test
     * @error 15 is not divisible by 4.
     * @description Test if input number can be divided by given number and the result is an exact whole number.
     */
    let lDivisible = false;
    const lNumber = Number(input.value);
    if (isFinite(lNumber)) {
      lDivisible =
        new Big(lNumber).mod(new Big(Number(number))).toString() === "0";
    }

    return lDivisible;
  },
  contains: (input, string) =>
    /**
     * @since 1.0.11
     * @param string string: String to appear in the Input Element
     * @description Require the input to contain a given string.
     * @example something
     * @error Your text needs to contain something!
     */
    input.value.includes(string),
  startsWith: (input, string) =>
    /**
     * @since 1.1.0
     * @param string string: String the input value should start with
     * @example +49
     * @error Your phone number needs to start with +49
     * @description Require the input value to start with a given string.
     */
    startsWith(input.value, string),
  endsWith: (input, string) =>
    /**
     * @since 1.1.0
     * @example UCV
     * @error Your Input needs to end with UCV
     * @param string string: String the input value should end with
     * @description Require the input value to end with a given string.
     */
    endsWith(input.value, string),
  matches: (input, matchingInput) => {
    /**
     * @since 1.1.0
     * @example #passwordConfirm
     * @error Your passwords should match
     * @param matchingInput string: The input element to match against
     * @description Require the input value to match the given inputs value. Like bootstrapValidate's first Parameter, you can pass a selector or Element.
     */
    let lMatchingInput = matchingInput;

    if (typeof lMatchingInput.nodeType === "undefined") {
      lMatchingInput = document.querySelector(matchingInput);
    }

    return input.value === lMatchingInput.value;
  },
  alpha: input =>
    /**
     * @since 1.1.0
     * @error You can only input alphabetic characters
     * @description Validate only alphabetic characters - a-z, A-Z.
     */
    isString(input.value) && new RegExp(/^[a-z]+$/i).test(input.value),
  inArray: (input, string) => {
    /**
     * @since 2.2.0
     * @example (ABC, DEF, GHI)
     * @param string string: Array String (abc, def, ghi)
     * @error Your input must be any of (ABC, DEF, GHI)
     * @description Validate if user input is in given array. Similar to contains, but with an array.
     */
    const value = trim(input.value);
    const array = split(trim(string, "whitespace()"), ",");
    return array.includes(value);
  }
};

export default module.exports;
