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

Insertion - O(1)
Removal - best case O(1) / worst case O(n)
Searching - O(n)
Accessing - O(n)

Time complexity best - O(n) (almost sorted data)\*\*
Time complexity average - O(n2)
Time complexity worst - O(n2)
Space complexity - O(1)

### Doubly Linked Lists

Each node has two pointers, pointing to the previous and next item.
A DLL still has a head and a tail.

The trade off is we use more memory however we have more flexiblity.
Takes half the time when searching.
Can we easier to navigate but comes at a cost by taking up more memory.

**Big O of DLL**

Insertion - O(1)
Removal - O(1)
Searching - O(n) technically searching is O(n/2) however this simplifies to O(n)
Accessing - O(n)

### Stacks and Queues

Both are abstract collections of data.
They both folowwo the LIFO model (last in first out).

Why are they used?

- Manage function invocations
- Undo/redo
- Routing (the history object in your browser) is treated like a stack.
