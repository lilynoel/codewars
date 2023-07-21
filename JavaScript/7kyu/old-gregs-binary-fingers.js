// OLD GREG'S BINARY FINGERS
// Old Greg likes to count his 31 fish on just one hand.
// To do this he holds his right hand up, palm facing toward him, fist closed and then counts in binary using his fingers.
// First he sticks his thumb out which makes 1, then just his index finger which makes 10 (decimal 2), then Index and thumb which makes 11 (decimal 3), 
// then just his middle finger which makes 100(decimal 4) and so on up to all five fingers out which makes 11111(decimal 31).
// Incidentally this is why when Old Greg is annoyed with you he says: Just let me count to 4 in binary (a joke only for IT people I think!).
// You need to create a function: binaryFingers into which will be passed a string of 1s and 0s, it should return an array showing which of Old Greg's digits which are up, 
// left to right, as Old Greg sees them:

// so:
// BinaryFingers.GetFingers("101") should return {"Middle", "Thumb"}
// BinaryFingers.GetFingers("11111") should return {"Pinkie", "Ring", "Middle", "Index", "Thumb"}
// You can be sure that the input parameter string will never contain more than 5 digits 
// (although this wouldn't work for Old Greg's friend Lucky Bob who has six fingers and can count to 63).
// An empty string should return an empty array.

// Link to challenge: https://www.codewars.com/kata/565f1bd8f97d3e59c400014a

// My Solution
function binaryFingers(binString) {
  // input is a string of 1's and 0's
  // create an array of possible fingerNames in reverse order
  const fingerNames = ["Pinkie", "Ring", "Middle", "Index", "Thumb"];

  // make sure binString always have 5 digits
  // if string doesn't contain 5 digits, put a 0 to the left until it does.
  while (binString.length < 5) {
    binString = "0" + binString;
  }
  console.log(binString);

  let output = [];

  for (let i = 0; i < binString.length; i++) {
    const char = binString.charAt(i);
    if (char === "1") {
      const finger = fingerNames[i];
      output.push(finger);
    }
    // output is an array of strings
  }
  return output;
}