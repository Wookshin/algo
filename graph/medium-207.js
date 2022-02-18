/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

 const canFinish = function (numCourses, prerequisites) {
  const visited = new Set()
  const traced = new Set()
  const graph = {}

  // make graph
  prerequisites.forEach(prerequisite => {
    const [end, start] = prerequisite
    if (!graph[start]) {
      graph[start] = []
    }

    graph[start].push(String(end))
  })

  // traverse dfs
  for (const key of Object.keys(graph)) {
    if (!dfs(key)) {
      return false
    }
  }

  return true

  // dfs function
  function dfs (key) {
    // whether cycle is or not
    if (traced.has(key)) {
      return false
    }
  
    // it is okay (it will not be cycle)
    if (visited.has(key)) {
      return true
    }
  
    traced.add(key)
    visited.add(key)
  
    // there is no node to traverse
    if (graph[key] == null) {
      traced.delete(key)
      return true
    }

    for (const end of graph[key]) {
      if (!dfs(end)) {
        return false
      }
    }
  
    traced.delete(key)
  
    return true
  }
}