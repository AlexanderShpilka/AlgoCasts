// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 2 - not the best as it does twice as much job as needed.
// Solution 1 is better.
function palindrome(str) {
  return [...str].every((el, i, arr) => {
    return el === arr[arr.length - 1 - i];
  });
}

module.exports = palindrome;

// Solution 1
// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');
//   return str === reversed;
// }
