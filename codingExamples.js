// Frequency Counter - naive

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if (correctIndex === -1) {
      return false
    }
    console.log(arr2)
    arr2.splice(correctIndex, 1)
  }
  return true
}

same([1, 2, 3, 2], [9, 1, 4, 4])

// Frequency Counter - refactored

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  console.log(frequencyCounter1)
  console.log(frequencyCounter2)
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])

// Anagram Challenge

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false
  }

  const lookup = {}

  for (let i = 0; i < first.length; i++) {
    let letter = first[i]
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1)
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i]
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1
    }
  }

  return true
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm')

// Multiple Pointers Pattern - Naive

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5])

// Multiple Pointers Pattern - Refactored

function countUniqueValues(arr) {
  if (arr.length === 0) return 0
  var i = 0
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}
countUniqueValues([1, 2, 2, 5, 7, 7, 99])

// Sliding Window Naive and Refactored

// O(n^2)

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null
  }
  var max = -Infinity
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0
    for (let j = 0; j < num; j++) {
      temp += arr[i + j]
    }
    if (temp > max) {
      max = temp
    }
  }
  return max
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)

// O(n)

function maxSubarraySum(arr, num) {
  let maxSum = 0
  let tempSum = 0
  if (arr.length < num) return null
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)

// Divide and Conquer

// Linear Search

function serach(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i
    }
  }
}

// Binary Search Divide and Conquer

function search(arr, val) {
  let min = 0
  let max = arr.length - 1
  while (min <= max) {
    let middle = Math.floor((min + max) / 2)
    // let currentElement = arr[middle]

    if (arr[middle] < val) {
      min = middle + 1
    } else if (arr[middle] > val) {
      max = middle - 1
    } else {
      return middle
    }
  }
  return -1
}

// Frequency Counter - sameFrequency

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(num1, num2) {
  let strNum1 = num1.toString()
  let strNum2 = num2.toString()
  if (strNum1.length !== strNum2.length) return false

  let countNum1 = {}
  let countNum2 = {}

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }

  for (let j = 0; j < strNum2.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false
  }

  return true
}

// Frequency Counter / Multiple Pointers - areThereDuplicates

// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b)
  let start = 0
  let next = 1
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true
    }
    start++
    next++
  }
  return false
}

// areThereDuplicates One Liner Solution

//  A Set is a collection of values with each value only occuring once
// The JavaScript prototype property allows you to add new properties to object constructors
// this is a keyword that (in non-strict mode) always refers to an object

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length
}

function areThereDuplicates() {
  const obj = {}

  for (let arg of arguments) {
    if (!obj[arg]) {
      obj[arg] = 1
    } else {
      return true
    }
  }

  return false
}

//
