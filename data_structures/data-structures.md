## Data Structures

Data structures are collections of values, the relationships among them and the functions of operations that can be applied to the data
There are many different data structures that excel in different things.
We will be creating our own data structures and the methods to access them e.g. .push()

**See also ES2015 Class Syntax**

### Singly Linked Lists

SLL is a data structre and stores any data you want. It is ordered but unlike an array which has an index, SLL's has a 'next' pointer that points to the next element in the list.

SLL's contain a head, tail and length.

Linked Lists consts of nodes, each node has a value and a pointer to another node OR null.

Random access is not allowed (give me the 10th item - instead we have to traverse the list).

We don't need to re-index with insertion and deletion as with an array (which cn be expensive).

**Big O of SLL**

- Insertion - O(1)
- Removal - best case O(1) / worst case O(n)
- Searching - O(n)
- Accessing - O(n)

- Time complexity best - O(n) (almost sorted data)\*\*
- Time complexity average - O(n2)
- Time complexity worst - O(n2)
- Space complexity - O(1)

### Doubly Linked Lists

Each node has two pointers, pointing to the previous and next item.
A DLL still has a head and a tail.

The trade off is we use more memory however we have more flexiblity.
Takes half the time when searching.
Can we easier to navigate but comes at a cost by taking up more memory.

**Big O of DLL**

- Insertion - O(1)
- Removal - O(1)
- Searching - O(n) technically searching is O(n/2) however this simplifies to O(n)
- Accessing - O(n)

### Stacks (and queue's)

Both are abstract collections of data.
Stacks follow the LIFO model (last in first out).

Why are they used?

- Manage function invocations
- Undo/redo
- Routing (the history object in your browser) is treated like a stack.

**Big O of Stacks**

- Insertion - O(1)
- Removal - O(1)
- Searching - O(n)
- Accessing - O(n)

### Queues

Queue's follow the FIFO (first in first out) model.
Examples of using this model:

- Waiting in line
- Waiting to join a video game (who gets added first)
- Uploading or downloading a file
- A print queue (university or public libray - print first gets printed first)

Why are they used?

**Big O of Queues**

- Insertion - O(1) constant time
- Removal - O(1) constant time
- Searching - O(n)
- Accessing - O(n)

### Trees, Binary Trees and Binary Search Trees

What is a tree?

- A branching structure of nodes with a parent/child relationship.
- A main brancg with branching structures.
- Lists are linear, trees are non-linear.
- A node an only point to a child. Every node is moving away from the parent node.
- We also need to have one entry point - the root.

**Terminology**

Root - The top node in a tree.
Child - A node connected to another node when moving away from the root.
Parent - The converse notion to a child.
Siblings - A group of nodes connected to the same parent.
Leaf - A node with no children.
Edge - The connection between nodes.

**Used cases**

- HTML DOM
- Network routing
- Artificial Intelligence (e.g. a decision tree in a tic-tac-toe AI game)
- Computer file systems
- JSON

There are lots of different types of trees with different rules. We will be focusing on binary trees and binary search trees.

### Binary Search Trees

Can only have up to two children and are ordered.
All numbers/nodes to the left must be less than the parent node.
All nodes to the right must be greater than the parent node.

### Binary Tree

As above but unordered

**Big O of BST**

- Insertion - O(log N) (log2 of n simplified)
- Searching - O(log N)

**Not guaranteed**

### Tree Traversal

Tree example:
------ 10
--- 6 ---- 15
3 --- 8 ------- 20

There are four ways to traverse an unordered tree:

- Breadth First
  Left to right, top to bottom
  [10, 6, 15, 3, 8, 20]

- Depth First - PreOrder (good for exporting a tree structure for cloning/flattening and repurposing at a later date)
  Top to bottom, left to right
  [10, 6, 3, 8, 15, 20]

- Depth First - PostOrder
  Bottom to top, left to right
  [3, 8, 6, 20, 15, 10]

- Depth First - InOrder (good for generating an ordred list)
  Left to right, bottom to top
  [3, 6, 8, 10, 15, 20]

**Big O BFS V DFS**

Where we have a wide binary tree with many nodes, BFS will need to keep track of and add to the queue many more nodes than DFS. The space complexity will be greater.
A deep long tree, BFS will be more efficient and reduce space complexity.
Time complexity is the same as each method will traverse all nodes once.

### Recap

- Trees are non-linear and contain a root and child nodes
- Binary Trees can have any value types but at most two children for each parent
- Binary Search Trees are more specific, nodes to the left are less, nodes to the right are greater
- We can serach Trees using BFS and DFS
