## Big O of objects and their performance

Insertion - `O(1)`
Removal - `O(1)`
Searching - `O(N)`
Access - `O(1)`

Good choice when you don't need ordering. All constant time accept for searching

## Bg O of Arrays and their performance

When you require ordering
Direct shortcut by using the index - constant time

Insertion at end - `O(1)`
Insertion at beginning - `O(n)`
Removal at end - `O(1)`
Removal - at beginning `O(1)`

**Push/Pop much faster than shift and on shift**
**push/pop = O(1)**
**shift/on shift/splice/slice/concat/forEach/map/filter/reduce = O(n)**
**sort = O(n \* log N)**

Searching - `O(N)`
Access - `O(1)`
