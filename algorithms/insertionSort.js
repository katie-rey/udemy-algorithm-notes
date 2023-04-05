// Pseudocode

// Pick the second element in the array
// Compare to the one before and if necessary swap
// Continue to next element and see if its in the correct order
// Iterate through the sorted portion and place in the correct spot.

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i]
    let index = i
    console.log(arr[i])
    for (let j = i - 1; j >= 0 && arr[j] > currVal; j--) {
      console.log(arr, arr[j], arr[i])
      // if (currVal < arr[j]) {
      arr[j + 1] = arr[j]

      index = j
      // }
    }
    arr[index] = currVal
    console.log(arr)
  }
  return arr
}

insertionSort([2, 1, 9, 76, 4])
