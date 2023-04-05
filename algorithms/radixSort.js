//  Requires some helper methods

// getDigit()

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
// Take num and divide it by the power of 10x its position
// 7423 / 100 = 74.23
// Math.floor returns the whole number
// 74
// The remainder operator returns the number left over afer num is divisible by 10 (% 10)
// 4
// We finally return 4 in position 2

// digitCount()

// Simple small function to calculate how many digits are in a number (from Stack Overflow)
// Math.log10() = returns the base 10 logarithm of a number / 10 to what power gives us x

function digitCount(num) {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

// mostDigits() - given an array of numbers, returns the number of digits in the largest numbers in the list

function mostDigits(arr) {
  let maxDigits = 0
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }
  return maxDigits
}

////////////////////////////////////////////////////////////////

// Radix Sort Pseudocode

// Define a function taht accepts a list of numbers
// Figure out how many digits the largest number has (how many times we will be loping)
// Create a loop unti the largets number of digits
// For each iteration of the loop:
// - create buckets for each digit
// -- a bucket is an empty array each with 10 sub arrays
// - place each number in the corresponding bucket based on its xth digit
// Replace our existing array with the values in the buckets, starting with 0 and ending in 9 (concat into new array)
// return list at the end

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums)
  for (let k = 0; k < maxDigitCount; k++) {
    // This create an array with 10 empty subarrays
    let digitBuckets = Array.from({ length: 10 }, () => [])
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(num[i], k)
      digitBuckets[digit].push(nums[i])
    }
    nums = [].concat(...digitBuckets)
  }
  return nums
}
