## Tree Data Structure
- #### Overview
   - A tree is a hirarchical ds that consists of nodes  connected by edges.
   - Tree is a non-lenear ds compared to array,string,linkedlist etc which are lenear ds.
   - In lenear ds, the time required to search is propotional to size of the data set.
   - Trees however being non lenear allow quicker and eaiser access to the data.
   - A tree will not contain any loops or cycles.

- #### Terminolagies
   - Node that doesn't have a parent node is called root node
   - Nodes  that doesn't have a child node is called leaf node
   - Degree:- The total no of child node it has.

- #### Binary Search Tree
  - A binary tree is a tree in which each node has atmost 2 child node. They are reffered to as left child and right child.
  - A binary search tree is a binary tree where each left node's value is <  the value of the parent node and each right node > the value of the parent node.

- #### Binary Search Tree Operations:- 
   - Insertion:- To add a node to the tree.
   - Search:- To find a node given it's value.
   - DFS(Depth First Search)
   - BFS(Breadth-first search)
   - Deletion:- Delete a node given it's value

- #### DFS Algorithm:- 
   - The DFS algo starts at the root node and explores as far as possible along each branch before backtracking.
   - Visit the root  node. Visit all the nodes in left subtree and visit all the nodes in right subtree.
   - Depening on Order it can be devided in three types:- 
        - Preorder
        - Inorder
        - Postorder
   - Preorder:- Read the data of the node -> visit the left subtree -> visit the right subtree.
   - Inorder:- Visit the left subtree -> visit the data of the code -> visit the right subtree.
   - Postorder:- Visit the left subtree -> Visit the right subtree -> read the node data;

- #### BFS Algorithm:- 
   - Explore all nodes at the present depth prior to moving on the nodes at next depth level.
   - Steps:- 
        1. Create a que.
        2. Enque the root Node.
        3. As long as the node exists do the following operations:- 
             - Deque the node from the front.
             - Read the Node's value.
             - Enque the node's left child if it exist.
             - Deque the node's right child if it exist.

       