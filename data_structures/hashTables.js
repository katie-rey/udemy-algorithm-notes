// Even thought JS has a built in hash table (Objects/Maps), we will be creating our own to see how it works under the hood
// Using an array
// Convert keys into array indexes

// In python, there are hash functions that convery a string into a number
// It is usually a one way function

// Writing our first hash functions (example)

'a'.charCodeAt(0) - 96

function hash(key, arrayLen) {
  let total = 0
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen
  }
  return total
}
hash('pink', 10) // returns 0
hash('cyan', 10) // returns 3
hash('purple', 10) // returns 8

// This only hashes STRINGS
// It's not constant time (it scales along with the size of the input)
// It could cluster easily and create duplicates

// Improves hash table

// Prime numbers help spread keys more uniformly
// Also helpful if the array you are putting values in has a prime length
// Not important to undertand why

// make the arrayLen be a prime number
function hash(key, arrayLen) {
  let total = 0
  let WEIRD_PRIME = 31
  // setting a maximum loop values
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i]
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen
  }
  return total
}

// A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
// A natural number greater than 1 that is not prime is called a composite number.

// Dealing with collisions

// Seperate Chaining

// We can add more than one key-value pair in an array indexes by grouping together in a nested data structure.
// Can store more than the length of the array

// Linear Probing

// When we encounter a collision, we look ahead to the next empty spot.
// Can only store the length pf the arrary.
