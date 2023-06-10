// FIND THE INDEX OF THE SECOND OCCURRENCE OF A LETTER IN A STRING
// In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

// Examples:
// secondSymbol('Hello world!!!','l')  --> 3
// secondSymbol('Hello world!!!', 'A') --> -1


// Link to challenge: https://www.codewars.com/kata/63f96036b15a210058300ca9

// My Solution
function secondSymbol(s, symbol) {
  // Input: string and a letter
  // loop over input, compare the symbol with each letter in the string
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === symbol) {
      // If the letter is equal to the symbol, increase a count.
      count = count + 1;
    }
    // If the count is 2, return index of that letter.
    if (count === 2) {
      return i;
    }
  }
  // Output: number
  return -1;
}
