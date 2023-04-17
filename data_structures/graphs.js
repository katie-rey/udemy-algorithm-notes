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
