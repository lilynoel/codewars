// TESTING 123
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// Link to challenge: https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

// My Solution
const number = function (array) {
  const newArray = array.map((str, index) => {
    return `${index + 1}: ${str}`;
  });
  return newArray;
};
