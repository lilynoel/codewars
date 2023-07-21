// ONES AND ZEROS
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

// Link to challenge: https://www.codewars.com/kata/578553c3a1b8d5c40300037c

// My Solution
const binaryArrayToNumber = (arr) => {
  // input is an array of integers
  // turn the array into a string
  const str = arr.join("");
  // use parseInt() to turn the string into a decimal
  // output is an integer
  return parseInt(str, 2);
};
