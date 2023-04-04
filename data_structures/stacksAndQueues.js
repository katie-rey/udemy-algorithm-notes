// Creating a stack with an Array

// The easiest way to create create a stack is using the push/pop OR shift/unshift methods on an array.
// As far as Big O notations, adding to the front is inefficient as we need to re-index the whole array.

// However as we are not using the index to access the array, we can also use a linked list instead.
// It is not constant time of we remove from the end of the array, hence why we remove and add at the beginning (essentially we are renaming shift/unshift methods we have already written in SSL's as push and pop)

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }
  push(val) {
    var newNode = new Node(val)
    if (this.length === 0) {
      this.first == newNode
      this.last == newNode
    } else if (this.length > 0) {
      var firstNode = this.first
      this.first = newNode
      this.first.next = firstNode
      // this.length++
    }
    return ++this.length
  }
  pop() {
    if (this.length === 0) return null
    var firstNode = this.first
    if (this.length === 1) {
      this.head == null
      this.tail == null
    } else {
      this.first = this.first.next
      this.length--
    }
    return firstNode.val
  }
}
