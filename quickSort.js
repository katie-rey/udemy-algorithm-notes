// Pseudocode Pivot Helper

// Best case scenario would be to choose the median valuein the array
// This csn be difficult to decipher so we are in this case going to use the first value in the array. This will have an impact on the algo's big o.

// Accept three arguments: an array, a start index and an end index
// Grab the pivot from the start of the array
// Store the current pivot index in a variable
// Loop through the array from the start to end
// - If pivot os greater than the current element, increment the pivot index var and swap the current el with the el at the pivot index
// Swap the starting el (pivot) with the pivot index
// Return teh pivot index

// View visualgo.net for a walkthrough of the algo

// Creat pivotIndex var
// Pick first el
// Loop through rest of array
// Swap if curr el is smaller and needs to be on the left of the pivot
// increment index var
// Swap pivot with index var

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
  return arr
}

pivotHelper([28, 41, 4, 11, 16, 1])

// Swap function

function swap(arr, i, j) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
