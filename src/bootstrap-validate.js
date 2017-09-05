import validate from "./validate";

module.exports = (input, rules, callback) => {
  // Check if a reference Element is already supplied,
  // e.g. via document.querySelector('.example').
  // If not, we are going to query it on our owns
  // enabling the user to only supply a query string.
  let lInput = input;
  debugger;

  if (Array.isArray(lInput)) {
    lInput.forEach(el => {
      let lElement = el;
      if (typeof el.nodeType == "undefined") {
        lElement = document.querySelector(el);
      }
      lElement.addEventListener("input", () => {
        validate(lElement, rules, callback);
      });
    });
  } else {
    if (typeof lInput.nodeType == "undefined")
      lInput = document.querySelector(input);

    lInput.addEventListener("input", () => {
      validate(lInput, rules, callback);
    });
  }
};

export default module.exports;
