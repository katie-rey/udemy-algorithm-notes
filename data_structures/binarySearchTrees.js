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
  // Breadth First Search
  BFS(value) {
    // create a queue ( this can be an array) and a variable to store the values of nodes visited
    // place the root node in the queue
    // loop as long as there is anything in the queue
    // while something in the queue:
    // - dequeue a node for the q and push the value of the node into the variable that stores the nodes
    // - if there is a left property on the node deq'd, add it to the q
    // - if there is a right property on the node deq'd, add it to the q
    // return the variable that stores the values
    var node = this.root
    var data = []
    var q = []
    q.push(node)
    while (q.length > 0) {
      node = q.shift()
      data.push(node.value)
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
    return data
  }
  DFSPreOrder() {
    // steps recursively
    // create a variable to store teh value of nodes visited
    // var curr = this.root
    // write a helper funciton that accepts a node
    // - push the val of the node to the variable that stores the values
    // - if the node has a left child, call the helper function with the left property on the node
    // - if the node has a right child, call the helper function with the right property on the node
    // invoke the helper function with the current variable
    // return the array of variables
    function traverse(node) {
      var data = []
      data.push(node.value)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data

    // Steps - Iteratively
    // Create a queue (this can be an array) and a variable to store the values of nodes visited
    // Place the root node in the queue
    // Loop as long as there is anything in the queue
    // Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    // If there is a left property on the node dequeued - add it to the queue
    // If there is a right property on the node dequeued - add it to the queue
    // Return the variable that stores the values
  }
  DFSPostOrder() {
    // create a variable to store the value of nodes visited
    // store the root in a variable called curr
    // var curr = this.root
    // write a helper funciton that accepts a node
    // - if the node has a left child, call the helper function with the left property on the node
    // - if the node has a right child, call the helper function with the right property on the node
    // - push the val of the node to the variable that stores the values
    // invoke the helper function with the current variable
    // return the array of variables
    var data = []
    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.value)
    }
    traverse(this.root)
    return data
  }
  DFSInOrder() {
    // create a variable to store the value of nodes visited
    // store the root in a variable called curr
    // var curr = this.root
    // write a helper funciton that accepts a node
    // - if the node has a left child, call the helper function with the left property on the node
    // - push the val of the node to the variable that stores the values
    // - if the node has a right child, call the helper function with the right property on the node
    // invoke the helper function with the current variable
    // return the array of variables
    var data = []
    function traverse(node) {
      // cleaner syntax eample below
      node.left && traverse(node.left)
      data.push(node.value)
      node.right && traverse(node.right)
    }
    traverse(this.root)
    return data
  }
}

var tree = new BinarySearchTree()

// Below is inefficient to insert new nodes.

tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.left = new Node(7)
tree.root.left.right = new Node(9)

// Instead we insert
