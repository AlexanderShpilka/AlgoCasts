// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

module.exports = anagrams;

// 1st solution
/* function anagrams(stringA, stringB) {
  const strAMap = getCharMap(stringA);
  const strBMap = getCharMap(stringB);

  if (Object.keys(strAMap).length !== Object.keys(strBMap).length) {
    return false;
  }

  for (let char in strAMap) {
    if (strAMap[char] !== strBMap[char]) {
      return false;
    }
  }

  return true;
}

function getCharMap(str) {
  const result = {};
  const cleanedStr = str.replace(/[^\w]/g, '').toLowerCase();

  for (let char of cleanedStr) {
    result[char] = result[char] + 1 || 1;
  }

  return result;
} */
