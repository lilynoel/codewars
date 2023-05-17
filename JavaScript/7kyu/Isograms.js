//  ISOGRAMS
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.

// Link to challenge: https://www.codewars.com/kata/54ba84be607a92aa900000f1

// My Solution
function isIsogram(str) {
  const lowercaseString = str.toLowerCase();

  const existingLetters = [];

  for (let i = 0; i <= lowercaseString.length - 1; i++) {
    const character = lowercaseString[i];
    if (existingLetters.includes(character)) {
      return false;
    }
    existingLetters.unshift(character);
  }
  return true;
}