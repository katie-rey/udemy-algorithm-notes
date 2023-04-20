## Dynamic Programming

A method for solving a comples problem by breaking it down into a collection of simpler sub problems, solving and storing them.
To use dynamic programming, there is a requirement for:

- Overlapping sub problems and
- Optimal substructure

**Overlapping Subproblems**

A problem is said to have overlapping sub problems if it can be broken down into subproblems which are reused several times.

For example, the Fibonacci sequence.

**Optimal substructure**

A problem is said to have optimal substructure if an optimal solution can be constructed from optimal soutions of its subproblems.

function fib(n) {
if (n === 2 || n === 1) return 1
return fib(n - 1) + fib(n - 2)
}

With the above fibonacci recursive solution, the Big O of n is O(2n) - exponential
As the nth number increases, we are duplicating our subproblems and solutions exponentially.

A way to shorten the time complexity of the above would be to use Memoization.

**Memoization**

Storing the results of expensive function calls and returning the cached result when the same inputs occur again.
