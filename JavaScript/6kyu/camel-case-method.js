// CAMEL CASE METHOD
// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. 
// All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

// Link to challenge: https://www.codewars.com/kata/587731fda577b3d1b0001196

// My Solution: 
String.prototype.camelCase = function () {
  // 'this' is the input string
  // split input string into array or separate strings
  const words = this.split(" ");
  const capitalizedWords = words.map(capitalize);
  return capitalizedWords.join("");
};

// function to capitalize the string
// take the first letter of the string and make it uppercase.
function capitalize(str) {
  const capitalizedFirstChar = str.charAt(0).toUpperCase();
  // we also want to take all of the other letters of the string, and make them lowercase.
  const lowerCaseString = str.substring(1).toLowerCase();
  // then we want to add those two things together.
  return capitalizedFirstChar + lowerCaseString;
}