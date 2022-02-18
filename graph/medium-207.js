/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

const canFinish = function (numCourses, prerequisites) {
  const visited = new Set()
  const traced = new Set()
  const graph = new Map()

  // make graph
  for (let i = 0; i < numCourses; i++) {
    graph.set(i, [])
  }

  for (const [v, e] of prerequisites) {
    graph.get(v).push(e)
  }

  // traverse dfs
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
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

    const edges = graph.get(key)

    for (const edge of edges) {
      if (!dfs(edge)) {
        return false
      }
    }

    traced.delete(key)
    visited.add(key)

    return true
  }
}
