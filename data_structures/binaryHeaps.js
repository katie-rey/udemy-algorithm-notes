// A binary heap can be stored as an array
// To find the children of the parents in an array, you can use the math formula:

// For any index of an array n
// The left child is stored at 2n + 1
// The right child is stored at 2n + 2

// To find the parents of a node, you can use the math formula:

// Math.floor((n-1) / 2)

// Adding to a MBH:
// Add at the end and bubble up

// pseudocode

// write a method called insert
// push the value to the end of the heap
// bubble up
// - take the last index item
// - find its parent
// - compare the two values
// - if new value is larger, swap
// if no index  - return null?

// my solution
class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12]
  }
  bubbleUp() {
    let index = this.values.length - 1
    const el = this.values[index]

    let parentIndex = Math.floor((index - 1) / 2)

    while (index > 0 && this.values[index] > this.values[parentIndex]) {
      let temp = this.values[parentIndex]
      this.values[parentIndex] = this.values[index]
      this.values[index] = temp

      index = parentIndex
      parentIndex = Math.floor((index - 1) / 2)
    }
  }
  insert(val) {
    this.values.push(val)
    this.bubbleUp()
  }

  // example 1

  // extractMax() {
  //   if (!this.heap.length) return

  //   this.swap(0, this.heap.length - 1)
  //   const oldNode = this.heap.pop()

  //   //trikle down
  //   let parent = 0,
  //     childLeft = 1,
  //     childRight = 2
  //   //Math.max returns NaN is one of the arguments is undefined
  //   let max = Math.max(this.heap[childLeft], this.heap[childRight] || -Infinity)

  //   while (this.heap[parent] < max) {
  //     let child = this.heap[childLeft] === max ? childLeft : childRight
  //     this.swap(parent, child)
  //     parent = child

  //     childLeft = parent * 2 + 1
  //     childRight = parent * 2 + 2
  //     max = Math.max(this.heap[childLeft], this.heap[childRight] || -Infinity)
  //   }
  //   return oldNode
  // }
  // swap(inx1, inx2) {
  //   ;[this.heap[inx1], this.heap[inx2]] = [this.heap[inx2], this.heap[inx1]]
  // }

  // example 2

  //   extractMax() {
  //     const max = this.values.shift();
  //     // check the array isn't emply:
  //     if (this.values.length) {
  //         this.values.unshift(this.values.pop());
  //         this.bubbleDown(0); // 0 is the index of max element (the root of the tree)
  //     }
  //     return max;
  // }

  // //this method would bubble down from any given index:
  // bubbleDown(index) {
  //     let leftChildIndex = 2 * index + 1;
  //     let rightChildIndex = 2 * index + 2;
  //     let swap;

  //     while (this.values[index] < this.values[leftChildIndex] || this.values[index] < this.values[rightChildIndex]) {
  //         if (this.values[index] < this.values[leftChildIndex] && this.values[index] < this.values[rightChildIndex]) {
  //             this.values[leftChildIndex] > this.values[rightChildIndex] ? swap = leftChildIndex : swap = rightChildIndex;
  //         } else if (this.values[index] < this.values[leftChildIndex]) swap = leftChildIndex;
  //         else swap = rightChildIndex;

  //         [this.values[index], this.values[swap]] = [this.values[swap], this.values[index]];
  //         index = swap;
  //         leftChildIndex = 2 * index + 1;
  //         rightChildIndex = 2 * index + 2;
  //     }
  // }

  // colts solution

  extractMax() {
    const max = this.values[0]
    const end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }
    return max
  }
  sinkDown() {
    let idx = 0
    const length = this.values.length
    const element = this.values[0]
    while (true) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let leftChild, rightChild
      let swap = null

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]
        if (leftChild > element) {
          swap = leftChildIdx
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
          swap = rightChildIdx
        }
      }

      if (swap === null) break
      this.values[idx] = this.values[swap]
      this.values[swap] = element
      idx = swap
    }
  }

  // my WORKING example

  //   bubbleDown() {
  //     let newIdx = 0
  //     let newEl = this.values[newIdx]

  //     while (true) {
  //       let leftchild = newIdx * 2 + 1
  //       let rightChildIdx = newIdx * 2 + 2

  //       while (this.values[newIdx] < this.values[leftChildIdx]) {
  //         let temp = this.values[leftChildIdx]
  //         this.values[leftChildIdx] = this.values[newIdx]
  //         this.values[newIdx] = temp
  //       }
  //     }
  //   }
  //   extractMax() {
  //     let removed = this.values[0]
  //     let replacedIdx = this.values.length - 1
  //     this.values[0] = this.values[replacedIdx]
  //     this.values.pop()
  //     console.log(this.values[0])
  //     this.bubbleDown()
  //     return removed
  //   }
}

let heap = new MaxBinaryHeap()
heap.insert(55)
console.log(heap)

// colts solution
// class MaxBinaryHeap2 {
//   constructor() {
//     this.values = []
//   }
//   insert(element) {
//     this.values.push(element)
//     this.bubbleUp()
//   }
//   bubbleUp() {
//     let idx = this.values.length - 1
//     const element = this.values[idx]
//     while (idx > 0) {
//       let parentIdx = Math.floor((idx - 1) / 2)
//       let parent = this.values[parentIdx]
//       if (element <= parent) break
//       this.values[parentIdx] = element
//       this.values[idx] = parent
//       idx = parentIdx
//     }
//   }
// }

// let heap2 = new MaxBinaryHeap2()
// heap2.insert(41)
// heap2.insert(39)
// heap2.insert(33)
// heap2.insert(18)
// heap2.insert(27)
// heap2.insert(12)
// heap2.insert(55)

// removing from a heap
// remove the root
// replace with the most recently added
// adjust (down-heap/bubble down/sink down/trickle down etc)
