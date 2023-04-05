// Pseudocode

// Function accepts a sorted array and a value
// Create a left pointer at the start
// Create a right pointer at the end
// While left comes before right:
// Create a middle pointer
// If you find the value return the index
// If value is too small, move the left pointer up
// If the value is too large, move the right pointer down
// If no value is found, return -1

// Binary Search Exercise
// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// This algorithm should be more efficient than linearSearch - you can read how to implement it here

function binarySearch(arr, val) {
  var left = 0
  var right = arr.length - 1
  var middle = Math.floor((left + right) / 2)

  while (arr[middle] !== val) {
    console.log(left, middle, right)
    if (arr[middle] < val) {
      left = middle + 1
    } else if (arr[middle] > val) {
      right = middle - 1
    }
    middle = Math.floor((left + right) / 2)
  }
  return arr[middle] === val ? middle : -1
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 13)

// OR

function binarySearch(arr, val) {
  var left = 0
  var right = arr.length - 1
  var middle = Math.floor((left + right) / 2)

  while (arr[middle] !== val) {
    console.log(left, middle, right)
    if (val > arr[middle] && left <= right) {
      left = middle + 1
    } else if (val < arr[middle]) {
      right = middle - 1
    }
    middle = Math.floor((left + right) / 2)
  }
  return arr[middle] === val ? middle : -1
}

// Refactored Version
function binarySearch(arr, elem) {
  var start = 0
  var end = arr.length - 1
  var middle = Math.floor((start + end) / 2)

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1
    else start = middle + 1
    middle = Math.floor((start + end) / 2)
  }
  return arr[middle] === elem ? middle : -1
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 13)

//Naive string searching

function naiveSearch(long, short) {
  var count = 0
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break
      if (j === short.length - 1) count++
    }
  }
  return count
}

naiveSearch('lorie loled', 'lol')
