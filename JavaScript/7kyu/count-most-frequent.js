// FIND COUNT OF MOST FREQUENT ITEM IN AN ARRAY
// Complete the function to find the count of the most frequent item of an array. 
// You can assume that input is an array of integers.For an empty array return 0

// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// output: 5 
// The most frequent number in the array is -1 and it occurs 5 times.

// Link to challenge: https://www.codewars.com/kata/56582133c932d8239900002e

// My Solution:
function mostFrequentItemCount(collection) {
  // Do your magic. :)
  if (collection.length === 0) {
    return 0;
  }
  const count = {};
  collection.forEach((number) => {
    if (count[number]) {
      // increase count
      count[number] = count[number] + 1;
    } else {
      count[number] = 1;
      // create a property on count and set value to 1
    }
  });
  const values = Object.values(count);
  console.log(count);
  console.log(values);
  return Math.max(...values);
}