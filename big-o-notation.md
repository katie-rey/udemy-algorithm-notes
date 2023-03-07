## Analyzing complexity with Big O notation to evaluate runtime or time complexity

To analyze performance of an algorithm, we use big O notation.
As the size of an input grows, we want to know how the runtime changes or how the space complexity changes.
Not about precision, just general trends.
Time and space complexity as measured by Big O depends only on the algorithm, not on the hardware.

### Benefits / The why

- Improve vocabulary of code performance
- Useful for discussing algorithm trade-offs
- Identifying slow code and performance

### What does better code mean?

- Faster
- Less memory-intensive
- More readable

performance.now()

### The how

- Count operations in terms of a fuzyy overview
- Reduce n \* 10 to n operations
- As n grows the number of operations grow according to n

### Different types of operations:

- Additions
- Assignments
- Comparisons

### Overview

Big o notation is a way of formalizing fuzzy counting
It allows us to formally talk about how the runtime of an algorithm grows as the inputs grow

#### We say that an algorithm of O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases.

// of MN as MN increases.

f(n) could be linear (f(n)=n)
f(n) could be quadratic (f(n)=n squared)
f(n) could be constant (f(n)=1)

O(1) constant
O(n) linear
O(n²) quadratic

An O(n) operation inside an
O(n) operation - an example of this would be a for loop inside a for loop
The result would be O(n \* n) OR O(n²)

O(operations / run time)

Simplifying down

e.g. O(n² + 5n + 8) = O(n²)

## Auxiliary Space Complexity

what happens to the space that an algorithm takes up as the size of the input increases.

A for loop and a console log = O(1)
A for loop which creates a new array = O(n) the size of the initial array will be the same size as the new array (proportionate)

## Logarithms

Some algorithms, sorting algorithms and recursion involve logarithmic time complexity

Basic heirarchy of least efficient to most efficient

`O(n²)`
`O(nlog n)`
`O(n)`
`O(log n)`
`O(1)`
