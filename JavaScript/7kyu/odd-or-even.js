// ODD OR EVEN?
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"


// Link to challenge: https://www.codewars.com/kata/5949481f86420f59480000e7

// My Solution
function oddOrEven(array) {
  // input is an array of integers
  // store sum of numbers in input array into a variable
  const sum = array.reduce((partialSum, a) => partialSum + a, 0);
  console.log(sum);
  // determine whether the sum of numbers is odd or even
  // if the sum is odd, return string "odd"
  if (sum % 2 !== 0) {
    return "odd";
    // if the sum is even, return string "even"
  } else {
    return "even";
  }
  // output is a string
}
