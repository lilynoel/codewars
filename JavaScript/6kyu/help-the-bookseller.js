// HELP THE BOOKSELLER!
// A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

// In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

// For example an extract of a stocklist could be:

// L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
// or
// L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
// You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

// M = {"A", "B", "C", "W"} 
// or
// M = ["A", "B", "C", "W"] or ...
// and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

// For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket/Prolog a list of pairs):

// (A : 20) - (B : 114) - (C : 50) - (W : 0)
// where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

// If L or M are empty return string is "" (Clojure/Racket/Prolog should return an empty array/list instead).

// Notes:
// In the result codes and their values are in the same order as in M.
// See "Samples Tests" for the return.

// Link to challenge: https://www.codewars.com/kata/54dc6f5a224c26032800005c

// My Solution:
function stockList(listOfArt, listOfCat) {
  // we have an array, and need to turn it into another type of array.
  if (listOfArt.length === 0 || listOfCat.length === 0) {
    return "";
  }
  const modifiedList = listOfArt.map(separateCodeAndName);
  const categoryNumbers = listOfCat.map((category) =>
    checkNumberByCategory(category, modifiedList)
  );
  const formattedQtys = categoryNumbers.map(qtyArrayToString);
  return formattedQtys.join(" - ");
}

function separateCodeAndName(artString) {
  // "ABAR 200"
  const artStringArray = artString.split(" ");
  const firstLetter = artStringArray[0].charAt(0);
  const number = parseInt(artStringArray[1]);
  return [firstLetter, number];
}

function checkNumberByCategory(categoryLetter, modifiedList) {
  // check if inside our modifiedList, there is an array that has categoryLetter as the first element.
  const filteredList = modifiedList.filter((arr) => arr[0] === categoryLetter);

  const sum = filteredList.reduce((total, arr) => {
    return total + arr[1];
  }, 0);
  return [categoryLetter, sum];
}

function qtyArrayToString(inputArray) {
  //  current input: [ 'A', 0 ],  desired output: "(A : 0)", "(B : 1290)"
  const letter = inputArray[0];
  const number = inputArray[1];
  const output = `(${letter} : ${number})`;
  return output;
}