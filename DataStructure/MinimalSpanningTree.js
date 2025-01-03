// If you have a graph, and selectively remove edges (without removing nodes) so that it forms a tree, what's left is called a Spanning Tree.
// That is, a spanning tree is a subset of the graph that has all the nodes of the original, but just enough edegs to hold it together. Fro any graph, there are usually many possible spanning trees.
// However, the Minimall Spanning Tree is one whose edges have the smallest total weight. (This assumes a weighted graph; i.e. a graph in whick each edge has a "weight" or a cost associated with it)

// Prim's Algorithm of Finding MST
// 1. Start at any node we want.
// 2. Keep track of what nodes have been visited.
// 3. Keep a list of edges. (These are the edges we use in building MST.)
// 4. For all edges of visited node but not in MST edges list, find the smallest weighted edge that doesn't create a cycle, and add the edge to the MST edge list. (Remember, MST is a tree, which should be cyclic) (If the smallest weight edge is connected to two nodes that are in MST array, then the edge would create a cycle)
// 5. Keep doing this until we come across a situation that a smallest weighted edge will 100% create a cycle. (That means that all nodes in this graph are in MST array) If we hit this point, then stop.

class Node {
    constructor(value) {
        this.value = value;
        this.visited = false;
        this.edges = [];
    }

    addNeighbor(edge) {
        this.edges.push(edge);
    }
}

class Edge {
    constructor(node1, node2, weight) {
        this.node1 = node1;
        this.node2 = node2;
        this.weight = weight;
    }
}

let A = new Node("A");
let B = new Node("B");
let C = new Node("C");
let D = new Node("D");
let E = new Node("E");
let F = new Node("F");
let allNode = [A, B, C, D, E, F];
let edge1 = new Edge(A, B, 10);
A.addNeighbor(edge1);
B.addNeighbor(edge1);
let edge2 = new Edge(A, C, 8);
A.addNeighbor(edge2);
C.addNeighbor(edge2);
let edge3 = new Edge(B, D, 6);
B.addNeighbor(edge3);
D.addNeighbor(edge3);
let edge4 = new Edge(C, D, 5);
C.addNeighbor(edge4);
D.addNeighbor(edge4);
let edge5 = new Edge(B, E, 7);
B.addNeighbor(edge5);
E.addNeighbor(edge5);
let edge6 = new Edge(D, E, 4);
D.addNeighbor(edge6);
E.addNeighbor(edge6);
let edge7 = new Edge(D, F, 3);
D.addNeighbor(edge7);
F.addNeighbor(edge7);
let edge8 = new Edge(E, F, 1);
E.addNeighbor(edge8);
F.addNeighbor(edge8);
let edge9 = new Edge(C, F, 8);
C.addNeighbor(edge9);
F.addNeighbor(edge9);

let bucket = [];
console.log(mstPrim(A));

function mstPrim(startNode) {
    let mstEdges = [];
    for (let i = 0; i < startNode.edges.length; i++) {
        bucket.push(startNode.edges[i]);
    }

    let bestEdge = getBestEdge();
    while (bestEdge != null) {
        let n1 = bestEdge.node1;
        let n2 = bestEdge.node2;
        n1.visited = true;
        n2.visited = true;
        mstEdges.push(bestEdge);
        bucket = [];
        allNode.forEach(node => {
            if (node.visited) {
                node.edges.forEach(edge => {
                    if (!mstEdges.includes(edge)) {
                        bucket.push(edge);
                    }
                })
            }
        })
        bestEdge = getBestEdge();
    }
    return mstEdges;
}

function getBestEdge() {
    let bestEdge = null;
    while (bestEdge == null && bucket.length != 0) {
        // find the best edge
        bestEdge = bucket[0];
        let index = 0;
        bucket.forEach((edge, i) => {
            if (edge.weight < bestEdge.weight) {
                bestEdge = edge;
                index = i;
            }
        });
        if (bestEdge.node1.visited && bestEdge.node2.visited) {
            bucket.splice(index, 1);
            bestEdge = null;
        }
    }
    return bestEdge;
}