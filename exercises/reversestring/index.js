// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// 4th solution
function reverse(str) {
  return Array.from(str).reduce((accum, current) => current + accum, '');
}

module.exports = reverse;

// 1st solution
// function reverse(str) {
//   let result = '';

//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }

//   return result;
// }

// 2nd solution
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// 3rd solution
// function reverse(str) {
//   let result = '';

//   for (let char of str) {
//     result = char + result;
//   }

//   return result;
// }
