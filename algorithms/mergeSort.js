// Pseudocode

// First implement a function that merges two sorted arrays
// Should run in O(n + m) time and space complexity
// Should iterate over each item in each array once

// Create an empty array
// Take a look at the smallest values in each input array
// Create two loops where i and j both start at zero
// While loop
// While there are still values we haven't looked at meaning while I and J both haven't hit the end of their respective arrays:
// - We're going to take the value of the first array of the first item and then compare that to the value of the first item in the second array.
//  - If the value in the first array is smaller than the value in the second array, push the value in the first aray into our results and move to the next value in the first array
//  - If vice versa, we push the value of the second array into our results

function mergeHelper(arr1, arr2) {
  var results = []
  let i = 0
  let j = 0
  while (i < arr1.length || j < arr2.length) {
    // Or Operator continues loop until all elements have been iterated over
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      console.log(results)
      j++
    }
  }
  return results
}

mergeHelper([1, 10, 50, 30], [2, 14, 99])

// Merges two already sorted arrays - longer version
function merge(arr1, arr2) {
  let results = []
  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    results.push(arr2[j])
    j++
  }
  return results
}
merge([100, 200], [1, 2, 3, 5, 6])

// Cleaner version using Conditional (ternary) operator
function mergeHelp(arr1, arr2) {
  let i = 0,
    j = 0,
    newArr = []
  while (i < arr1.length && j < arr2.length) {
    arr1[i] < arr2[j] ? (newArr.push(arr1[i]), ++i) : (newArr.push(arr2[j]), ++j)
  }
  i === arr1.length && j < arr2.length
    ? newArr.push(...arr2.slice(j))
    : newArr.push(...arr1.slice(i))
  return newArr
}

// Part Two!
// Pseudocode

// Break up the array into half using slice
// Break up each half up again recursively until you reach the base case
// Base case = array <= 1
// Merge and sort smaller arrays together until you are back to the full length og the array

function mergeSort(arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return mergeHelp(left, right)
}

mergeSort([10, 24, 76, 73, 72, 1, 9])
