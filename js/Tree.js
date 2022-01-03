class Tree {
  constructor() {
    this.root = null;
  }

  // * methods

  insert(data) {
    let newNode = new Node(data);

    // if no root node, make this the root
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    // compare newNode to currentNode
    // if node is null add it
    // if node exists, make that the current node and rerun function

    // if less, data goes left
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    }
    // if greater, data goes right
    else if (newNode.data > node.data) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  isValidBST(node = this.root, min = null, max = null) {
    if (node === null) {
      return true;
    }

    if (max !== null && node.data >= max) {
      return false;
    }

    if (min !== null && node.data <= min) {
      return false;
    }

    const leftSide = this.isValidBST(node.left, min, node.data);

    const rightSide = this.isValidBST(node.right, node.val, max);

    return leftSide && rightSide;
  }


  // inserts invalid nodes to test if tree is valid
  insertFalse(data) {

    if (this.root === null) {
      return 'Empty'
    }

    let currentNode = this.root

    do {
      currentNode.right.data = data
      currentNode = currentNode.right
    } while (currentNode.right !== null);

  }

  // find smallest node value - most left node
  findMin() {
    if (this.root === null) {
      return "Empty";
    }

    let currentNode = this.root;

    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  // find largest node value - most right node
  findMax() {
    if (this.root === null) {
      return "Empty";
    }

    let currentNode = this.root;

    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }


  inOrder(root = this.root) {

    if (root.left !== null) {
      this.inOrder(root.left);
    }
    
    console.log(root.data);
    
    if (root.right !== null) {
      this.inOrder(root.right);
    }

  }

}
