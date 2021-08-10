/**
 * Require a field to be filled out.
 *
 * @param {string} value User Input String
 * @returns {boolean} Validation Result
 */
export default function required(value) {
  return Boolean(value.length);
}
