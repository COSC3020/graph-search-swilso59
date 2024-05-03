function depthFirstSearch(graph, startNode, targetNode) {
    // A function to check if a node is the target
    function isTarget(node) {
        return node === targetNode;
    }

    // A recursive function to explore the graph
    function explore(node, visited, path) {
        // Mark the current node as visited
        visited[node] = true;

        // Add the current node to the path
        path.push(node);

        // If the current node is the target, we're done
        if (isTarget(node)) {
            return true;
        }

        // Explore unvisited neighbors
        for (let neighbor of graph[node]) {
            if (!visited[neighbor]) {
                // Recursively explore the neighbor
                if (explore(neighbor, visited, path)) {
                    return true;  // If a path to the target is found, stop exploring
                }
            }
        }

        // If no path is found from the current node, backtrack
        path.pop();
        return false;
    }

    // Initialize data structures
    const visitedNodes = {};
    const currentPath = [];

    // Start exploring from the provided start node
    const found = explore(startNode, visitedNodes, currentPath);

    // Return the path if the target is found; otherwise, return an empty array
    return found ? currentPath : [];
}




// search-in-graphs-Dhruv8806, search-in-graphs-ClaytonBrown4741, search-in-graphs-ziyuWang6666, search-in-graphs-20gbrown These were some of the repositories I reviewed to implement my code. 
// I used https://stackoverflow.com/questions/12864004/tracing-and-returning-a-path-in-depth-first-search
// I also recieved some help form the TA.
