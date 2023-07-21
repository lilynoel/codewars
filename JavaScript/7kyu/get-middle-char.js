// GET THE MIDDLE CHARACTER
// You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.
// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

// #Input
// A word (string) of length 0 < str < 1000 
// (In javascript you may get slightly more than 1000 in some test cases
// due to an error in the test cases). You do not need to test for this.
// This is only here to tell you that you do not need to worry about your 
// solution timing out.

// #Output
// The middle character(s) of the word represented as a string.

// Link to challenge: https://www.codewars.com/kata/56747fd5cb988479af000028

// My Solution
function getMiddle(s) {
  // input is a string

  // check input string length and store .length in a variable
  const stringLength = s.length;

  // find the middle index of input string
  const middleIndex = Math.floor(stringLength / 2);

  // check if .length is odd or even
  if (stringLength % 2 !== 0) {
    // if .length is odd, return the middle character of input string
    return s.slice(middleIndex, middleIndex + 1);
  } else {
    // if .length is even, return the middle 2 characters of input string
    return s.slice(middleIndex - 1, middleIndex + 1);
  }
  // output is a new string (either 1 or 2 characters)
}