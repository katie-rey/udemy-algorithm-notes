## Sorting Algorithms - Rearranging items so that they are in some sort of order.

Javascript .sort() sorts by string Unicode code points. Useful for strings however not so useful for integers.

.sort() method can accept a sorting helper functoin to sort integers. For example:

`
function ascending(num1, num2) {
return num1 - num2;
}

[6, 4, 15, 10].sort(ascending;
`

The above function will return: [6, 4, 10, 15]

`function descending(num1, num2) {
  return num2 - num2
  }`

Another helper function :
`function compareByLen(str1, str2) {
return str1.length - str2.length
}
 `

### Bubble Sort

**Time complexity best - O(n) (almost sorted data)**
Time complexity average - O(n2)
Time complexity worst - O(n2)
Space complexity - O(1)

Compare two integers side by side and swap or bubble to the top the largets integer.

Repeat moving through the array, comparing two side by side numbers. On each iteration, the largest number will shift or move to the top or right side of the array.

Under the hood, many sorting alogirhtms include a swapping function.

### Selection Sort

**Time complexity best - O(n) (almost sorted data)**
Time complexity average - O(n2)
Time complexity worst - O(n2)
Space complexity - O(1)

Not that efficient O(n2) quadratic. As the length of the arary grows, the number of comparisons grow roughlt at a rate of n x n.

Where selection sort is better than bubble sort, we only make one swap at the end of the loop, if you were concerned about writing to memory, selection sort would be more efficient.

### Insertion Sort

Time complexity best - O(n2)
Time complexity average - O(n2)
Time complexity worst - O(n2)
Space complexity - O(1)

Is quadratic n2.

If we have a nearly sorted array, this algorithm sorts more efficiently.

Also works as an online algorithm - where we are receiving a continuous feed of live data.
