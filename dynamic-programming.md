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

/_
function fib(n) {
if (n === 2 || n === 1) return 1
return fib(n - 1) + fib(n - 2)
}
_/

With the above fibonacci recursive solution, the Big O of n is O(2n) - exponential
As the nth number increases, we are duplicating our subproblems and solutions exponentially.

A way to shorten the time complexity of the above would be to use Memoization.

**Memoization**

Storing the results of expensive function calls and returning the cached result when the same inputs occur again.

Below we are storing the results of the recursive function call in an array under the corresponding indexes.

/_
function fib(n, memo=[]) {
if(memo[n]) !== undefined return memo[n]
if (n <= 2) return 1
var res = fib(n-1, memo) + fib(n-2, memo)
memo[n] = res
return res
}
_/

We could also store the results in an object as per below:

/_
{
1: 1,
2: 2,
etc
}
_/

By using memoization, we could say it has O(n). As n grows, our operations grow.

**Tabulation - a botton up approach**

Storing the result of a previous result in a "table" - usually an array.

Usually completed using iteration.

Better space complexity can be achieved using tabulation.

/_
function fibTable(n) {
// base case
if (n <= 2) return 1
// pre-set the result for fib 0, 1 and 2
var fibNums = [0, 1, 1]
// loop from 3 to n
for (var i = 3; i <=n; i++) {
// calculate the fib of i and add to fibNums
fibNums[i] = fibNums[i-1] + fibNums[i-2]
}
// return the result
return fibNums[n]
}
_/
