// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) { // 15
  const reversed = parseInt(n.toString().split('').reverse().join(''));

  return Math.sign(n) * reversed;
}

module.exports = reverseInt;

// function reverseInt(n) { // 15
//   const isNegative = n < 0; // false

//   const absolute = Math.abs(n); // 15
//   const reversed = Number(String(absolute).split('').reverse().join(''));

//   if (isNegative) {
//     return reversed * -1;
//   }

//   return reversed;
// }
