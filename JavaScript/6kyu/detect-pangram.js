// DETECT PANGRAM
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, 
// the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A - Z
// at least once(case is irrelevant). Given a string, detect whether or not it is a pangram. Return True if it is, 
// False if not. Ignore numbers and punctuation.

// Link to challenge: https://www.codewars.com/kata/545cedaa9943f7fe7b000048

// My Solution
function isPangram(string) {
  const alphabet = [];

  for (let char of string) {
    char = char.toLowerCase();
    if (/[a-z]/i.test(char) && !alphabet.includes(char)) {
      alphabet.push(char);
    }
  }

  return alphabet.length === 26;
}