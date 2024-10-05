/*
===> What is graph:
    ->  A graph is a data structure consisting of nodes (vertices) and edges. 
    ->  Nodes represent entities, and edges represent the relationships between those entities.

===> Terminalogies of graph:
    1)  Directed Graph: Edges have a direction (A → B).
    2)  Undirected Graph: Edges don’t have a direction (A ↔ B).
    3)  Vertex:  a node 
    4)  Edge: Connection between nodes
    5)  Weighted graph:
            ->  A weighted graph is a type of graph where each edge has a numerical value or "weight" 
                associated with it. This weight usually represents cost, distance, or time between two 
                nodes
    6)  Unweighted graph: 
            ->  An unweighted graph is a graph where the edges between nodes do not have any associated 
                weights or costs. Each edge simply represents a connection without prioritizing any path
*/

/*
===> Real-world Use Cases:
    1)  Social Networks: Represent users as nodes, and friendships or connections as edges.
    2)  Google Maps: Cities or locations are nodes, and roads are edges.
    3)  Web Crawling: Web pages as nodes, hyperlinks as edges.
    4)  Recommendation Systems: Products and users as nodes, interactions (likes, purchases) as edges.
        ->  "People also watched"
        ->  "You might also like"
        ->  "People you also know"
        ->  "Frequently bought with"
*/

/*
===> Storing graph:
    ->  We can store graph using adjacency matrix (see storing graph image)
    ->  We can also store graph using adjacency list (see the adjecency_list image).
        -> can be hash-table
*/

/*
===> Adjacency List Vs Adjacency Matrix:
    1) Adjacency  List:
        ->  Adjacency list can take up less space (in sparse graph)
        ->  Faster to iterate over all edges
        ->  Can be slower to loop up specific edges

    2) Adjacency Matrix:
        ->  Take up more space (in sparse graph)
        ->  Slower to iterate over all edges
        ->  Faster to loop up specific edges
*/

/*
===> BigO of Adjacency list and matrix:
    ->  | V | -> Number of vertices
    ->  | E | -> Number of edges 

    Operation                       Adjacency List                          Adjacency Matrix
        Add Vertex:                     O(1)                                    O(V^2)
        Add Edge                        O(1)                                    O(1)
        Remove Vertex                   O(1)                                    O(V^2)
        Remove Edge                     O(E)                                    O(1)
        Query                           O(V + E)                                O(1)
        Storage                         O( V + E)                               O(V^2)
*/