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
// Can only store the length of the array.

// Set/Get

// pseudocode - set

// 1. Accepts a key/value pair
// 2. Hashes the key
// 3. Stores the key-value pair in the hash table array by seperate chaining.

// pseudocode - get

// 1. Accepts a key
// 2. Hashes a key
// 3. Retrieves the key/value pair
// 4. Loop through the key/value pairs and return the correct hash key
// 5. If its not there it should return undefined.

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size)
  }

  _hash(key) {
    let total = 0
    let WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }
    return total
  }
  set(key, value) {
    let index = this._hash(key)
    if (!this.keyMap[index]) {
      this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value])
  }
  get(key) {
    let index = this._hash(key)
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          // return the entire array
          // return this.keyMap[index][i]
          // returns the value only
          return this.keyMap[index][i][1]

          // another solution:
          // return (this.keyMap[index][i][0] === key ? this.keyMap[index][i][1] : undefined)
        }
      }
    }
    return undefined
  }
  keys() {
    let keysArr = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keysArr
  }
  values() {
    let valuesArr = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valuesArr
  }
}

let ht = new HashTable(17)

ht.set('maroon', '#800000')
ht.set('yellow', '#FFFF00')
ht.set('olive', '#808000')
ht.set('salmon', '#FA8072')
ht.set('lightcoral', '#F08080')
ht.set('mediumvioletred', '#C71585')
ht.set('plum', '#DDA0DD')

ht.keys().forEach(function (key) {
  console.log(ht.get(key))
})
