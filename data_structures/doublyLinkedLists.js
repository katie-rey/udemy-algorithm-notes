// Doubly linked list Skeleton

class Node {
  constructor(val) {
    this.val = val
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    // create new node
    // check if list is empty (set new node to head and tail)
    // find tail, point tail.next to new node
    // connect new node to tail (tail.prev will)
    // increment
    // return
    let newNode = new Node(val)
    if (!this.head) {
      // or if(this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }
  pop() {
    if (!this.tail) return undefined
    let currTail = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = this.tail.prev
      this.tail.next = null
      currTail.prev = null
    }
    this.length--
    return currTail
  }
  shift() {
    //removes a node from the beginning
    if (!this.head) return undefined
    let currHead = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = currHead.next
      this.head.prev = null
      currHead.next = null
    }
    this.length--
    return currHead
  }
  unshift(val) {
    // will add a node to the beginning of our DLL
    let newNode = new Node(val)
    if (!head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    this.length++
    return this
  }
  // Get method takes a number and returns the value at that position
  get(idx) {
    if (idx < 0 || idx >= this.length) return null
    // refactoring
    var count, current
    if (idx <= this.length / 2) {
      count = 0
      current = this.head
      while (count != idx) {
        current = current.next
        count++
      }
    } else {
      count = this.length - 1
      current = this.tail
      while (backCount != idx) {
        currTail = currTail.prev
        count--
      }
    }
    return currTail
  }
  // Set changes the value of a node based in its position in the Linked List
  set(idx, val) {
    let foundNode = this.get(idx)
    if (foundNode != null) {
      foundNode.val = val
      return true
    }
    return false
  }
  // insert adds a node into a DLL into a certain position
  insert(idx, val) {
    if (idx < 0 || idx >= this.length) return null
    if (idx === 0) return !!this.unshift(val)
    if (idx === this.length) return !!this.push(val)

    let newNode = new Node(val)
    let foundNode = this.get(idx)
    let prev = this.get(idx - 1)
    newNode.next = foundNode
    newNode.prev = prev
    foundNode.prev = null
    foundNode.prev = newNode
    prev.next = null
    prev.next = newNode
    this.length++
    return true
  }
  // Colts different and refactored version (both working)
  //   insert(index, val){
  //     if(index < 0 || index > this.length) return false;
  //     if(index === 0) return !!this.unshift(val);
  //     if(index === this.length) return !!this.push(val);

  //     var newNode = new Node(val);
  //     var beforeNode = this.get(index-1);
  //     var afterNode = beforeNode.next;

  //     beforeNode.next = newNode, newNode.prev = beforeNode;
  //     newNode.next = afterNode, afterNode.prev = newNode;
  //     this.length++;
  //     return true;
  // }
  // remove removes a node in a DLL at a certain postion
  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined
    if (idx === 0) return !!this.shift()
    if (idx === this.length - 1) return !!this.pop()
    let foundNode = this.get(idx)
    let prev = this.get(idx - 1)
    let next = this.get(idx + 1)
    // prev.next = null
    // next.prev = null
    prev.next = next
    next.prev = prev

    foundNode.next = null
    foundNode.prev = null
    this.length--
    return foundNode
  }
}

var list = new DoublyLinkedList()
