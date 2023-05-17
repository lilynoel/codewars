// STOP GNINNIPS MY SDROW!
// Write a function that takes in a string of one or more words, and returns the same string,
// but with all five or more letter words reversed(Just like the name of this Kata). 
// Strings passed in will consist of only letters and spaces.Spaces will be included only
// when more than one word is present.

// Link to challenge: https://www.codewars.com/kata/5264d2b162488dc400000001

// My Solution
function spinWords(string) {
  const words = string.split(" ");

  const newWords = words.map((word) => {
    if (word.length >= 5) {
      return word.split("").reverse().join("");
    }
    return word;
  });

  return newWords.join(" ");
}

