// LEAP YEARS
// In this kata you should simply determine, whether a given year is a leap year or not.
// In case you don't know the rules, here they are:

// years divisible by 4 are leap years
// but years divisible by 100 are not leap years
// but years divisible by 400 are leap years
// Additional Notes:

// Only valid years (positive integers) will be tested, so you don't have to validate them
// Examples can be found in the test fixture.

// Link to challenge: https://www.codewars.com/kata/526c7363236867513f0005ca

// My Solution
function isLeapYear(year) {
  // input is a number
  // If input year is divisible by 4 and not divisible by 100, return true.
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  }
  // If input year is divisible by 400, return true.
  if (year % 400 === 0) {
    return true;
  }
  // otherwise return false
  return false;
  // output is a boolean
}