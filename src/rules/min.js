/**
 * Require a given minimum character count.
 *
 * @param {string} value User Input String
 * @param {int} minimumCharacters Number of minimum characters.
 * @returns {boolean} Validation Result
 */
export default function min(value, minimumCharacters) {
  return value.length >= minimumCharacters;
}
