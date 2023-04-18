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

### Heaps and Binary Heaps

MaxBinaryHeap

- Each parent has at most **two** child nodes
- Value of parent node is always **greater** than the value of child node
- No relationship between children nodes (left and right as per a BST does not count here) e.g. left is not less and right is not greater
- BH is as compact as possible, children nodes are as full as possible and are filled out left first

MBH example:
.......100
...19------26
17---3...25---1

MinBinaryHeap

- Each parent has at most two child nodes
- Value of parent node is always **less** than the value of child node

### Priority Queue

A data structure where each element has a priority.
Elements with higher priorities are served before elements with lower priority.

An example of a priority queue could be a doctors waiting room (gunshot wound (walking in last) has a higher priority than the flu, or a broken finger!)

Using a max binary heap with a priority queue (abstract concept) is much quicker than a list

**Big O of Binary Heaps**

- Insertion - O(log n)
- Removal - O(log n)
- Searching - O(n) (not best use for searching)
- Accessing - O(n)

For 16 elements there are only 4 comparisons. One time per row. (2 to the power of 4 gives us 16)
For 32 elemenst there are only 5 comparisons. (2 to the power of 5 gives us 32)

Insertion is much quicker than a binary tree (worst case)

**Recap**

- Binary Heaps are very useful for sorting or implementing other data structues like priority queues
- BH's are either MaxBinaryHeaps or MinBinaryHeaps with parents being smaller or larger than their children

### Hash Tables

Are used to store key-value pairs
The keys are NOT ordered
They are fast for all operations
JS has Objects and Maps (objects have some restrictions (keys must be stored as strings, but are basically hash tables))

What makes a good hash table

- Fast (constant time)
- Doesn't cluster outputs at specific indexes
- Deterministic (same input yields the same output)

**Dealing with collisions**

Seperate Chaining

We can add more than one key-value pair in an array indexes by grouping together in a nested data structure.
Can store more than the length of the array

Linear Probing

When we encounter a collision, we look ahead (or backwards) to the next empty spot.
Can only store the length of the array.

**Big O of Hash Tables (average case)**

- Insertion - O(1)
- Removal - O(1)
<!-- - Searching - O(1)  -->
- Accessing - O(1) (using a given key and finding the corresponding key/value pair in the array)

### Graphs

What are graphs

A graph is a collection of nodes and connections.

An example of its use would be a map (shortest distance), recommendations

Vertex = a node
Edge = connections between nodes
Only one path two and from nodes

**Undirected Graph**

There is no direction or polarity of the edges in the graph
You can traverse either way

**Directed Graph**

There is a direction allocated to the edge.
It flows only one way.
An example of this would be an Instagram Followers Graph

**Unweighted v weighted graph**

A weighted graph has a value assigned to the edges.
As example of a weighted graph would be google maps (also a directed graph - think of one way streets).

**Adjacency Matrix**

- Takes up more space in sparse graphs
- Slower to iterate over all edges
- Can be faster to look up specific edge

  A B C D
  A 0 1 0 1
  B 1 0 1 0
  C 0 1 0 1
  D 1 0 1 0

**Adjacency List**

- Can take up less space in sparse graphs
- Faster to iterate over all edges
- Can be slower to look up specific edge

{
A: ["D", "B"]
B: ["A", "C"]
C: ["B", "D"]
D: ["C", "A"]
}

### Graph traversal (visiting,checking each vertex in a graph)

**Depth First Traversal**

Iteratively works by starting at the end of the adjacency list not the beginning as with the DFS resursive solution i.e.
We create our own call stack where B awaits on the bottome of the stack (as we are searching depth first)

- Recursive = A -> B -> D -> E -> C -> F
- Iterative = A -> C -> E -> F -> D -> B

// A
// / \
// B C
// | |
// D --- E
// \ /
// F

**Breadth First Traversal**

We visit each vertex horizontally before vertically.
We visit each neighbour vertex one edge away before its neighbours neighbours (ot two edge steps away)

### Dijkstra's Algorithm

Solves finding the shortest path from A to B on a graph.

Edsger Dijkstra was a dutch programmer, physicist and computer programmer.
He wrote many papers and created new fields which spawned off many new disciplines.

Some of its uses are:

- GPS
- Network Routing
- Airline Tickets
- Biology - used to model the spread of viruses among humans

We will need to build a weighted graph to implement the algorithm.
