/**
 * Require a valid E-Mail Address.
 *
 * @param {string} value User Input String
 * @returns {boolean} Validation Result
 */
export default function email(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
