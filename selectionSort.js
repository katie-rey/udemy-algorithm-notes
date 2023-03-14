//  Pseudocode
// Store the first element as the smallest value you've seen so far
// Compare this item to the nexy item in the array until you find the smallest number
// If a smaller number is found, designate that number to be the new minimum and continue until the end of the array
// Swap the initial value and the minimum if the newly found minimum is smaller

// LEGACY VERSION (non ES2015 syntax) O(n2)
function sselectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j
      }
    }
    if (i !== lowest) {
      //SWAP!
      var temp = arr[i]
      arr[i] = arr[lowest]
      arr[lowest] = temp
    }
  }
  return arr
}

// ES2015 VERSION
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])

  for (let i = 0; i < arr.length; i++) {
    let lowest = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j
      }
    }
    if (i !== lowest) swap(arr, i, lowest)
  }

  return arr
}

selectionSort([0, 2, 34, 22, 10, 19, 17])
