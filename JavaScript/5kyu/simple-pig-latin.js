
// SIMPLE PIG LATIN
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
// Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// Link to challenge: https://www.codewars.com/kata/520b9d2ad5c005041100000f

// My Solution:
function pigIt(str) {
  // turn string into array of words
  const words = str.split(" ");

  // map over array,
  const newWords = words.map((word) => {
    //    move the first letter
    //    of each word to the end of it, then add "ay"
    //    to the end of the word.
    //    if word is punctuation, ignore it.
    if (/^[A-Za-z0-9]*$/.test(word)) {
      let newWord = word.substr(1) + word.charAt(0) + "ay";
      return newWord;
    }
    return word;
  });
  return newWords.join(" ");
}