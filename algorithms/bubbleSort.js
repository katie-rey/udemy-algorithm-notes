// Pseudocode
// Loop with a varible called i from the end of the aray towards the beginning
// Start an inner loop called j, from the beginning until i - 1
// If arr[j] is greater than arr[j + 1], swp those two values.
// Return the sorted array.

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1])
      if (arr[j] > arr[j + 1]) {
        // Swap
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
}

bubbleSort([37, 27, 3, 5, 1, 55])

//OR using ES6 bracket notation O(n2) quadratic

function bubbleSort(arr) {
  const swap = (arr, indx1, indx2) => {
    ;[arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]]
  }
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}

bubbleSort([37, 27, 3, 5, 1, 55])

// Optimization O(n) - linear

function bubbleSort(arr) {
  let noSwaps = true
  const swap = (arr, indx1, indx2) => {
    ;[arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]]
  }
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1])
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        noSwaps = false
      }
    }
    if ((noSwaps = true)) break
  }
  return arr
}

// bubbleSort([37, 27, 3, 5, 1, 55])
bubbleSort([1, 2, 4, 7, 6, 8])
