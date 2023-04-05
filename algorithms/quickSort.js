// Pseudocode Pivot Helper

// Best case scenario would be to choose the median value in the array
// This can be difficult to decipher so we are in this case going to use the first value in the array. This will have an impact on the algo's big o.

// Accept three arguments: an array, a start index and an end index
// Grab the pivot from the start of the array
// Store the current pivot index in a variable
// Loop through the array from the start to end
// - If pivot os greater than the current element, increment the pivot index var and swap the current el with the el at the pivot index
// Swap the starting el (pivot) with the pivot index
// Return teh pivot index

// View visualgo.net for a walkthrough of the algo

// Create pivotIndex var
// Pick first el
// Loop through rest of array
// Swap if curr el is smaller and needs to be on the left of the pivot
// increment index var
// Swap pivot with index var
// Return pivot index

function pivotHelper(arr, start = 0, end = arr.length + 1) {
  var pivotIndex = 0

  function swap(arr, i, j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  for (let i = 1; i < arr.length; i++) {
    if (i == 1 && arr[i] < arr[0]) {
      pivotIndex++
    } else if (!i == 1 && arr[i] < arr[0]) {
      pivotIndex++
      swap(arr, pivotIndex, i)
      // arr[pivotIndex] = arr[i]
    }
  }
  return pivotIndex
}

pivotHelper([28, 41, 4, 11, 16, 1])

// Swap function

function swap(arr, i, j) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// Quick sort

// First Version
function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }

  var pivot = arr[start]
  var swapIdx = start

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
  return swapIdx
}

// Version with ES2015 Syntax
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    ;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }

  // We are assuming the pivot is always the first element
  let pivot = arr[start]
  let swapIdx = start

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx)
  return swapIdx
}

pivot([4, 8, 2, 1, 5, 7, 6, 3])

// Quick Sort Pseudocode

// Pivot Helper returns the sorted index
// Call the piviot helper on the array at beginning and return first pivot point
// Recursively call the pivot helper on the left and right side subarray's

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right)
    // left
    quickSort(arr, left, pivotIndex - 1)
    // right
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr
}

quickSort([4, 6, 9, 1, 2, 5, 3])
