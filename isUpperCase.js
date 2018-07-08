/**
 * @fileOverview Checks if the string is in uppercase
 */

/**
 * Checks if the string is in uppercase
 * @param {string} s The string to be checked
 * @returns {boolean}
 */
const isUppercase = (s) => {
  var i = 0;
  var character = '';
  var result = true;
  while (i <= s.length) {
    character = s.charAt(i);
    if (!isNaN(character * 1)) {
      if (character == character.toLowerCase()) {
        result = false;
      }
    }
  }
  return result;
};

module.exports = isUppercase;
