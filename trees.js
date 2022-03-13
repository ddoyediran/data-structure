/**
 * 
    // It is a non linear data structure - To store hierarchical data
    // It has Root, Node and Link

 * Basic terms
 * 1.) Root: is the topmost node without a parent
 * 2.) Parent(s): Are Node that has a child or children.
 * 3.) Siblings: Are children or nodes that has same parent.
 * 4.) Leaf: Are node(s) without a child or children.
 * 5.) Depth of x: Is the length of path from root to node x. Depth of root node is 0
 * 6.) Height of x: Number of edges or length in the longest path from the root to Node x.
 * 7.) Height of the overall trees - it is the height of the trees.
 *
 * Applications: storing hierarchical data (e.g File system), organize data (for quick search, insertation, deletion e.g Binary Search Tree), Tries (dictionaries), Network Routing Algorigthm
 * 
 * Binary Search Trees, BST
 * BST is a binary tree in which for each node, the value of all the nodes in the right subtreeof the nodes are greater
 * and the value of all the nodes in the left subtree are lesser or equal.
 * 
 * // Rules to keep note
 * a.) BT must have atleast 2 children
 * b.) Must have exactly one root
 * c.) Exactly one path between root and any node.
 * 
 *  Schematic of a Binary Tree
 *             
 *                   a
 *                 /   \
 *                b     c
 *               / \     \
 *              d   e     f
 */

// Implementation

class BinarySearchNode {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// function getNewNode(data) {
//   let newNode = new BinarySearchNode(data);
//   newNode.data = data;
//   newNode.left = null;
//   newNode.right = null;

//   return newNode;
// }

// class BinaryTree {
//   contructor() {}

//   insert(root, data) {
//     if (root === null) {
//       root = getNewNode();
//     }
//   }
// }

// Depth First Values

const depthFirst = (root) => {
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();

    console.log(current.data);

    if (current.left) {
      stack.push(current.left);
    }

    if (current.right) {
      stack.push(stack.right);
    }
  }
};

const a = new BinarySearchNode("a");
const b = new BinarySearchNode("b");
const c = new BinarySearchNode("c");
const d = new BinarySearchNode("d");
const e = new BinarySearchNode("e");
const f = new BinarySearchNode("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
