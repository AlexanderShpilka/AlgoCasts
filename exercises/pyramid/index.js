// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let cols = n * 2 - 1;
  let mid = Math.floor(cols / 2);

  for (let rows = 0; rows < n; rows++) {
    let stair = '';

    for (let col = 0; col < cols; col++) {
      if (col >= mid - rows && col <= mid + rows) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }

    console.log(stair);
  }
}

module.exports = pyramid;
