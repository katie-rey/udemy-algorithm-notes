## Recursion

### What is recursion?

It's a process that calls itself
When we say recursion, we're referring to a function that calls itself.

### Why?

Examples of recursion:

- JSON.stringify(), JSON.parse() under the hood
- document.getElementsById()

Cleaner alternative to iteration
Used in Object traversal

When we write recursive functions we keep pushing new functions onto the stack

### Recursive function essentials

- Requires a BASE CASE for recursion to end
- Requires a different input

### Example

#### Recursive Version

```
  function countDown(num){
  if(num <= 0) {
  console.log("All done!");
  return;
  }
  console.log(num);
  num--;
  countDown(num);
  }
  countDown(3)
```

#### Iterative Version

```
  function countDown(num){
  for(var i = num; i > 0; i--){
  console.log(i);
  }
  console.log("All done!")
  }
```

#### Recursive function

```
function sumRange(num) {
if (num === 1) return 1,
return num + sumRange(num-1)
}
```

### Factorial Examples

#### Iteratively

```
function factorial(num){
let total = 1;
for(let i = num; i > 1; i--){
total \*= i
}
return total;
}
```

#### Recursively

```
function factorial(num){
if (num === 1) return 1
return num \* factorial(num-1)
}
```

- Always remember to include a base case
- Always include a return

Otherwise you may end up with a stack overflow.

#### Helper Method Recursion

Creating a helper method defined inside a function

E.g.

````
function collectOddValues(arr){

    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }

        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }
    ```

    helper(arr)

    return result;

}

collectOddValues([1,2,3,4,5,6,7,8,9])
````

### Pure Recursion

- For arrays, use methods like **slice** the **spread operator** and **concatenate** that will make copies of arrays so you don't mutate them. This will allow you also to accumulate some sort of result.
- Strings are immutable, so you'll need to use methods like **slice** or **substring** to make copies.
- For objects, use **Object.assign** or the **spread operator** to make copies.

As per belowe, if we didn't use .conact, we would be returning an empty array on each recursion.

````
function collectOddValues(arr){
    let newArr = [];

    if(arr.length === 0) {
        return newArr;
    }

    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5])
                                  ```
````
