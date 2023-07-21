// HOW MANY ARE SMALLER THAN ME?
// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

// For example:

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]
// If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version How many are smaller than me II?



// Link to challenge: https://www.codewars.com/kata/56a1c074f87bc2201200002e

// My Solution
function smaller(nums) {
  // input is an array of numbers
  // map over array. look at item in array
  const newArray = nums.map((num, i) => {
    let count = 0;

    // make a copy of array, start at the index after the one we have
    const numsToRight = nums.slice(i + 1);

    // loop through every item after, check if value is bigger
    for (let n of numsToRight) {
      if (n < num) {
        // if it is, increase a count variable
        count += 1;
      }
    }
    // use count variable as element in new array
    return count;
  });

  // output is a new array of numbers
  return newArray;
}