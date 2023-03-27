//
//  Requires some helper methods

// getDigit() returns the num at a given position or place value
// This will only work with base-10 numbers not binary numbers

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

// Reminder of positions
// Given a number 7423
// Its positions will be 3, 2, 1, 0 where num 3 is at position 0

// getDigit takes in a number and a position
// Math.abs ensures if the num is a negative, the positions will stay the same and not become a negative position
// Take num and divide it by the power of 10
// 7423 / 100 = 74.23
// Math.floor returns the whole number
// 74
// The remainder operator returns the number left over afer num is divisible by 10 (% 10)
// 4
// We finally return 4 in position 2
