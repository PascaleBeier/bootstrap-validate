import flatten from "lodash/flatten";
import validate from "./validate";

module.exports = (input, rules, callback) => {
  // Check if a reference Element is already supplied,
  // e.g. via document.querySelector('.example').
  // If not, we are going to query it on our owns
  // enabling the user to only supply a query string.
  flatten([input]).forEach(element => {
    // Check for either element or selector.
    const lElement = element.nodeType
      ? element
      : document.querySelector(element);

    lElement.addEventListener("input", () => {
      validate(lElement, rules, callback);
    });
  });
};

export default module.exports;
