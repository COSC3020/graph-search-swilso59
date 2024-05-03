const fs = require('fs');
const jsc = require('jsverify');

// Assuming depthFirstSearch is defined in 'code.js'
eval(fs.readFileSync('code.js') + '');

const adjList = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F', 'G'],
    'D': ['B'],
    'E': ['B', 'H'],
    'F': ['C'],
    'G': ['C'],
    'H': ['E']
};

const startNode = 'G';
const targetNode = 'E';

// Call the depthFirstSearch function with the provided graph and nodes
const path = depthFirstSearch(adjList, startNode, targetNode);

// Validate and display the result
if (path.length > 0 && path[path.length - 1] === targetNode) {
    console.log(`Path from ${startNode} to ${targetNode}: ${path.join(' -> ')}`);
} else {
    console.log(`No valid path found from ${startNode} to ${targetNode}`);
}

// Verify the result and fail the test if incorrect
if (path.length === 0 || path[path.length - 1] !== targetNode) {
    console.error("Test has failed: No path found.");
    process.exit(1); // Exit with non-zero status code to indicate test failure
}
