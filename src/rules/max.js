/**
 * Require a given maximum character count.
 *
 * @param {string} value User Input String
 * @param {int} max Number of maximum characters.
 * @returns {boolean} Validation Result
 */
export default function max(value, max) {
  return value.length <= max;
}
