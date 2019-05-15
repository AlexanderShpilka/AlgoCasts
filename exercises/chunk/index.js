// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// best solution as for me
function chunk(array, size) {
  const chunked = [];
	let index = 0;

	while (index < array.length) {
		chunked.push(array.slice(index, index + size));
		index += size;
	}

	return chunked;
}

module.exports = chunk;

// 1st solution - mine (don't like it)
/* function chunk(array, size) {
  const result = [];
  let copy = [...array];
  const iterations = Math.ceil(array.length / size);
	
  for (let i = 0; i < iterations; i++) {
    let chunk = [];

    for (let j = 0; j < copy.length; j++) {
      if (chunk.length === size) {
        break;
			}
			
			chunk.push(copy.shift());
			j--;
    }

    result.push(chunk);
  }

  return result;
} */

// 2nd solution - I really like it
/* function chunk(array, size) {
  const chunked = [];

  for (let element of array) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
} */

// 3rd solution - mine and I like it
/* function chunk(array, size) {
  const result = [];
	const iterations = Math.ceil(array.length / size);
	let copy = [...array];

	for (let i = 0; i < iterations; i++) {
		const chunk = copy.splice(0, size);
		result.push(chunk);
	}

	return result;
} */
