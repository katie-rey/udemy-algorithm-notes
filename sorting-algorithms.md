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

Compare two integers side by side and swap or bubble to the top the largets integer.

Repeat moving through the array, comparing two side by side numbers. On each iteration, the largest number will shift or move to the top or right side of the array.

Under the hood, many sorting alogirhtms include a swapping function.
