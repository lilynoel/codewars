// MAKE ACRONYM
// Write function which takes a string and make an acronym of it.
// Rule of making acronym in this kata:
// 1. split string to words by space char
// 2. take every first letter from word in given string
// 3. uppercase it
// 4. join them together

// Eg:
// Code wars -> C, w -> C W -> CW
// Note: There will be at least two words in the given string!

// Link to challenge: https://www.codewars.com/kata/57a60bad72292d3e93000a5a

// My Solution
function toAcronym(inp) {
  let acronym = "";
  let wordArray = inp.split(" ");
  for (let i = 0; i < wordArray.length; i++) {
    acronym += wordArray[i][0];
  }
  return acronym.toUpperCase();
}