// FIND THE ODD INT
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// Link to challenge: https://www.codewars.com/kata/54da5a58ea159efa38000836

// My Solution:
function findOdd(A) {
  // initialize an empty object
  const count = {};

  // loop through the array
  for (const num of A) {
    // check: is there a key that is this element of the array?
    // if there is: we increase the number or value associated with this key by 1
    // if there isn't: we create a new key, and make it the same as this element in the array and set
    // its value to 1
    if (count[num]) {
      count[num] = count[num] + 1;
    } else {
      count[num] = 1;
    }
    // the reuslt of this, is we get a count object.
  }

  return A.find((num) => count[num] % 2 !== 0);
}