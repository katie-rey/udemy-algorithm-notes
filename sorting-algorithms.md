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

Also works as an online algorithm - where we are receiving a continuous feed of live data and need to keep the data sorted.

---

All the above have average time complexities that are quadratic.
Better, more efficient = more complex algorithms.

### Merge Sort

**Time complexity best - O(n log n)**
**Time complexity average - O(n log n)**
**Time complexity worst - O(n2)**
Space complexity - O(n log n)

- Will still perform the same functions regardless of how sorted or unsorted the data is
- Big O of Merge Sort = O(n log n)
- O(log n) decompositions
- O(n) comparisons per decomposition
- 2 of what power gives us n
- If 8 elements, 2 power of 3 (3 decompositions of the arrays to arrive at single element arrays)
- If 32 elements, 2 power of 5 gives us 32 (5 decompositions (break downs or seperations in halves))
- When merging, as n grows the merge algorithm grows. If there are 8 items in the array, there will be approximately 8 comparisons that need to be made.

Splitting up, merging and sorting.
Exploits the fact that arrays of 0 or 1 element are alays sorting.
Divides and conquers arrays, splitting into smaller arrays until you get to an array of 1.
Compares two arrays and sorts and merges them, this progess continues for both left and right seperated array.
Finally both arrays are merged together.

[2, 5, 7, 1, 9, 6, 3, 8]

[2, 5, 7, 1] [9, 6, 3, 8]

[2, 5] [7, 1] [9, 6] [3, 8]

[2] [5] [7] [1] [9] [6] [3] [8] Seperated out into smallest array

[2, 5] [1, 7] [6, 9] [3, 8] Sorts and merges 2 x arrays

[1, 2, 5, 7] [3, 6, 8, 9] Sorted left and rght arrays

[1, 2, 3, 5, 6, 7, 8, 9] Finally sorts and merges together both arrays

## Quick Sort

Like merge sort, exploits the fact that arrays of 0 or 1 element are alays sorting.
Chooses the first element in the array and deciphers whether the other elements should sit before or after.
The chosen element is then moved to its correct index in the array - also called the pivot point.
It then sorts the left hand side in a similar way.

**Time complexity best - O(n log n)**
**Time complexity average - O(n log n)**
**Time complexity worst - O(n2)**
Space complexity - O(log n)

Best Case - Time
As n grows we need to make O(log n) decompositions

| 8
| 4 12
| 2 6 10 14
| 1 3 5 7 9 11 13 15
V

O(log n) decompositions
O(n) comparisons per decomposition

Worst Case - Time
If we have an initial sorted array and use arr[0] as the pivot (first item in the array), with each decomposition we are pivoting on only one item.

| 1, 2, 3, 4, 5, 6, 7, 8
|
| 1
| [2, 3, 4, 5, 6, 7, 8]
|
| 1
| 2
| [3, 4, 5, 6, 7, 8]
|
| 1
| 2
| 3
| [4, 5, 6, 7, 8]
v
O(n) decompositions

To avoid this, we could select the median or a random number.

## Radix Sort 
(integer sort)

Works on lists of numbers.
It never makes comaprisons between elements.
It never asks what's what's smaller, what's larger.
Instead, it exploits the fact that information about the size of a number is encoded in the number of digits.
e.g. a four digit number is larger than a three digit number

Starts with the right most digit and places the number into a 'bucket' of digits starting from 0.

0 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
