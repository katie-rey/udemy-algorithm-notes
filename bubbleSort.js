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
