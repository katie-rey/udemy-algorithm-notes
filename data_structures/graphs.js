// undirected graph
// does not contain error handling and handling duplicates

class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }
  addEdge(v1, v2) {
    this.adjancencyList[v1].push(v2)
    // in a directed graph, we would only add one edge not two!
    this.adjancencyList[v2].push(v1)
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2)
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1)
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, adjacentVertex)
    }
    delete this.adjacencyList[vertex]
  }

  depthFirstRecursive(start) {
    const result = []
    const visited = {}
    const adjacencyList = this.adjacencyList

    ;(function dfs(vertex) {
      if (!vertex) return null
      visited[vertex] = true
      result.push(vertex)
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor)
        }
      })
    })(start)

    return result
  }
  depthFirstIterative(start) {
    // The function should accept a starting node
    // Create a stack to help us keep track of vertices (use a list/array)
    // Create a list to store the end result, to be returned at the very end
    // Create an object to store visited vertices
    // Add the starting vertex to the stack, and mark it visited
    // While the stack has something in it:
    // - Pop the next vertex from the stack
    // - If that vertex hasn't been visited yet:
    // ​- Mark it as visited
    // - Add it to the result list
    // - Push all of its neighbors into the stack
    // Return the result array

    console.log(g)
    // console logs give a clear picture of DFI functions

    let stack = [start]
    // || stack.push(start)
    let result = []
    let visited = {}
    let currVertex
    // visited of start = true
    visited[start] = true
    // while (stack.length) ||
    while (stack.length > 0) {
      currVertex = stack.pop()

      console.log(currentVertex + '' + 'currVert')

      result.push(currVertex)

      this.adjacencyList[currVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true

          console.log(visited)

          stack.push(neighbour)

          console.log(stack + '' + 'stack')
        }
      })
    }
    return result
  }
  breadthFirstSearch(start) {
    // pseudcode
    // This function should accept a starting vertex
    // Create a queue (you can use an array) and place the starting vertex in it
    // Create an array to store the nodes visited
    // Create an object to store nodes visited
    // Mark the starting vertex as visited
    // Loop as long as there is anything in the queue
    // Remove the first vertex from the queue and push it into the array that stores nodes visited
    // Loop over each vertex in the adjacency list for the vertex you are visiting.
    // If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
    // Once you have finished looping, return the array of visited nodes

    let queue = [start]
    let result = []
    let visited = {}
    visited[start] = true
    let currVertex

    while (queue.length) {
      currVertex = queue.shift()
      result.push(currVertex)
      // below is an example of traversing breadth first in reverse (right to left)
      // this.adjacencyList[currVertex].slice().reverse().forEach((el) => {
      this.adjacencyList[currVertex].forEach((el) => {
        if (!visited[el]) {
          visited[el] = true
          queue.push(el)
        }
      })
    }
    return result
  }
}

let g = new Graph()

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')
g.depthFirstRecursive('A')

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

// g.addVertex('Dallas')
// g.addVertex('Tokyo')
// g.addVertex('Aspen')
// g.addVertex('Los Angeles')
// g.addVertex('Hong Kong')
// g.addEdge('Dallas', 'Tokyo')
// g.addEdge('Dallas', 'Aspen')
// g.addEdge('Hong Kong', 'Tokyo')
// g.addEdge('Hong Kong', 'Dallas')
// g.addEdge('Los Angeles', 'Hong Kong')
// g.addEdge('Los Angeles', 'Aspen')

// Iteratively works by starting at the end of the adjacency list not the beginning as with the DFS resursive solution above
