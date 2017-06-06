module.exports = {
    /**
     * @param input HTMLInputElement
     * @param min number
     */
  min: (input, min) => input.value.length >= min,
    /**
     * @param input HTMLInputElement
     * @param max number
     */
  max: (input, max) => input.value.length <= max,
};
