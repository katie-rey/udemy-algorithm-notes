// Push

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    var newNode = new Node(val)
    // edge case if no head
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      // take tail and add one node on the end
      this.tail.next = newNode
      // move the tail over to the end
      this.tail = newNode
    }
    this.length++
    return this
  }
  // The below is an example of how to travese a list
  // traverse() {
  //   var current = this.head
  //   while(current) {
  //     console.log(current.val)
  //     current = current.next
  //   }
  // }
  pop() {
    if (!this.head) return undefined
    var curr = this.head
    var newTail = curr
    while (curr.next) {
      newTail = curr
      curr = curr.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return curr
  }
  shift() {
    if (!this.head) return undefined
    var curr = this.head
    this.head = curr.next
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return curr
  }
  unshift(val) {
    var newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  // Not working - requires review
  // get(idx) {
  //   if (idx < 0 || idx >= this.length) return null
  //   let counter = 0
  //   let curr = this.head
  //   while (curr) {
  //     if (idx === counter) return curr
  //     curr = curr.next
  //     counter++
  //   }
  //   return curr
  // }
  get(index) {
    if (index < 0 || index >= this.length) return null
    var counter = 0
    var current = this.head
    while (counter !== index) {
      current = current.next
      counter++
    }
    return current
  }
  // Both work
  // set(idx, val) {
  //   let curr = this.get(idx)
  //   if (!curr) return false
  //   curr.val = val
  //   return true
  // }
  set(index, val) {
    var foundNode = this.get(index)
    if (foundNode) {
      foundNode.val = val
      return true
    }
    return false
  }
  insert(idx, val) {
    // if idx is == to length we can just insert
    if (idx < 0 || idx > this.length) return null
    // converting return values to boolean so we are always returning true or false (and not the list)
    if (idx === 0) return !!this.unshift(val)
    if (idx === this.length) return !!this.push(val)
    var newNode = new Node(val)
    let prevNode = this.get(idx - 1)
    let aftNode = this.get(idx)
    prevNode.next = newNode
    newNode.next = aftNode
    this.length++
    return this
  }
  // Colts version (both work)
  //   insert(index, val){
  //     if(index < 0 || index > this.length) return false;
  //     if(index === this.length) return !!this.push(val);
  //     if(index === 0) return !!this.unshift(val);

  //     var newNode = new Node(val);
  //     var prev = this.get(index - 1);
  //     var temp = prev.next;
  //     prev.next = newNode;
  //     newNode.next = temp;
  //     this.length++;
  //     return true;
  // }

  // My version - requires review
  // remove(idx, val) {
  //   if (idx < 0 || idx > this.length) return null
  //   if (idx === 0) return !!this.shift()
  //   if (idx === this.length - 1) return !!this.pop()
  //   var prev = this.get(idx - 1)
  //   var curr = this.get(idx)
  //   // OR var curr = prev.next
  //   var aft = this.get(idx + 1)
  //   this.pop(curr)
  //   prev.next = aft
  //   this.length--
  //   return curr.val
  // }
  // Colts version
  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()
    var previousNode = this.get(index - 1)
    var removed = previousNode.next
    previousNode.next = removed.next
    this.length--
    return removed
  }
  reverse() {
    var curr = this.head
    this.head = this.tail
    this.tail = curr
    var prev = null
    var next
    for (var i = 0; i < this.length; i++) {
      next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    return this
  }
  // reverse helper method
  print() {
    var arr = []
    var current = this.head
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr)
  }
}

var list = new SinglyLinkedList()
// list.push("HELLO")
// list.push("GOODBYE")
// list.push(99)

// push inserts at the end of a list, points the last item to the new pushed node

// Pop removes the last item from the list

// Shift removes the current head

// Unshift adds a node to the beginning of the list

// Get method takes a number and returns the value at that position

// Set changes the value of a node based in its position in the Linked List

// Insert adds a value at a specific index

// Remove - removes a node from a specific position

// Reverse - reverses the linked list in place
// Pseudocode
// Swap the head and the tail
// create a var called next
// create a var called prev
// create a var called curr and initialise it as the head property
// Loop through the linked list
// Set next to be the next property on whatever node(curr) is
// Set the next property on the node to be whatever prev is
// Set prev to be the value of the node var
// Set the node variable to be the value of the next variable
