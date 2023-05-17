// MAKE THE DEADFISH SWIM
// Write a simple parser that will parse and run Deadfish.
// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

// Link to challenge: https://www.codewars.com/kata/51e0007c1f9378fa810002a9

// My Solution:
// Return the output array, and ignore all non-op characters
function parse(data) {
  // input string (could be made up of any characters)
  // find some way to break into individual characters
  // loop over every letter in the string

  // initialise array
  const output = [];

  // variable to represent value
  let value = 0;

  for (let char of data) {
    // check: is the letter an i? if it is, console log "this is an i"
    // repeat for d, s and o
    if (char === "i") {
      // increment the value
      value++;
    }
    console.log(char);
    if (char === "d") {
      value--;
    }
    if (char === "s") {
      value = value * value;
    }
    if (char === "o") {
      output.push(value);
    }
  }
  return output;
}
