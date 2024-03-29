// MULTIPLES OF 3 OR 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number
// passed in.Additionally, if the number is negative, return 0(for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Link to challenge: https://www.codewars.com/kata/514b92a657cdc65150000006

// My Solution
function solution(number) {
  // input is a number.
  // if the number is negative, return zero.
  if (number <= 0) {
    return 0;
  }

  // create an array of numbers.
  const arrayOfNums = [];

  // array will contain all numbers multiples of 3 ** OR ** 5,
  // ...but are less than the input number.
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arrayOfNums.push(i);
    }
  }

  // once we have the array, return the sum of the array.
  return arrayOfNums.reduce((partialSum, a) => partialSum + a, 0);
}
