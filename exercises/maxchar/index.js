// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charToReturn;

  let maxOccurencies = 0;
  const map = {};

  for (let char of str) {
    let count = map[char] || 0;

    map[char] = ++count;
  }

  for (let key in map) {
    if (map[key] >= maxOccurencies) {
      charToReturn = key;
      maxOccurencies = map[key];
    }
  }

  return charToReturn;
}

module.exports = maxChar;
