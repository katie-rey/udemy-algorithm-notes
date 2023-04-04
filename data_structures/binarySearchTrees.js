class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    var newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
      return this
    }
    var current = this.root
    while (true) {
      if (value === current.value) return undefined
      if (value < current.value) {
        if (current.value === null) {
          current.left = newNode
          return this
        } else {
          current = current.left
        }
      } else if (current.value > value) {
        if (current.value === null) {
          current.right = newNode
          return this
        } else {
          current = current.right
        }
      }

      // refactored to reduce the else statement

      // while (true) {
      //   if (value === current.value) return undefined
      //   if (value < current.value) {
      //     if (current.left === null) {
      //       current.left = newNode
      //       return this
      //     }
      //     current = current.left
      //   } else {
      //     if (current.right === null) {
      //       current.right = newNode
      //       return this
      //     }
      //     current = current.right
      //   }
      // }
    }
  }
  find(val) {
    if (!this.root) return false
    var current = this.root
    found = false
    while (current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        found = true
      }
    }
    if (!found) return undefined
    return current
  }
  // the same syntax as find however returns true or false and not the found node
  contains(val) {
    if (!this.root) return false
    var current = this.root
    found = false
    while (current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        return true
      }
    }
    return false
  }
}

var tree = new BinarySearchTree()

// Below is inefficient to insert new nodes.

tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.left = new Node(7)
tree.root.left.right = new Node(9)

// Instead we insert
