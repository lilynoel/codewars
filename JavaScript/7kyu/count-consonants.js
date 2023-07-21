// COUNT CONSONANTS
// Complete the function that takes a string of English-language text and returns the number of consonants in the string.
// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

// Link to challenge: https://www.codewars.com/kata/564e7fc20f0b53eb02000106

// My Solution
function consonantCount(str) {
  // input is a string
  const consonants = [
    "B",
    "C",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "M",
    "N",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  // create a count variable and set it to 0
  let count = 0;

  // loop through str
  for (let char of str.toUpperCase()) {
    // check every character for consonants
    if (consonants.includes(char)) {
      // if consonant,  increase count variable
      count += 1;
    }
  }

  // if not consonant, do nothing
  // return count variable
  return count;
  // output is a number of consonants in str
}
