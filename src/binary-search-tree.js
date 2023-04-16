const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.rootNode === null) {
      this.rootNode = newNode;
      return;
    }

    let currentNode = this.rootNode;
    while (currentNode !== null) {
      if (data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else if (data > currentNode.data) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        // data is already in the tree
        break;
      }
    }
  }

  has(data) {
    let currentNode = this.rootNode;
    while (currentNode !== null) {
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else {
        // data is in the tree
        return true;
      }
    }
    // data is not in the tree
    return false;
  }

  find(data) {
    let currentNode = this.rootNode;
    while (currentNode !== null) {
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else {
        // data is in the tree
        return currentNode;
      }
    }
    // data is not in the tree
    return null;
  }

  remove(data) {
    let parentNode = null;
  let currentNode = this.rootNode;

  // find the node to remove
  while (currentNode !== null && currentNode.data !== data) {
    parentNode = currentNode;
    if (data < currentNode.data) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }

  if (currentNode === null) {
    // data is not in the tree
    return;
  }

  // case 1: node has no children
  if (currentNode.left === null && currentNode.right === null) {
    if (currentNode === this.rootNode){
      // remove the root node
      this.rootNode = null;
    } else if (currentNode === parentNode.left) {
      parentNode.left = null;
    } else {
      parentNode.right = null;
    }
  }
  // case 2: node has only one child
  else if (currentNode.left === null || currentNode.right === null) {
    const childNode = currentNode.left ?? currentNode.right;
    if (currentNode === this.rootNode) {
      // remove the root node
      this.rootNode = childNode;
    } else if (currentNode === parentNode.left) {
      parentNode.left = childNode;
    } else {
      parentNode.right = childNode;
    }
  }
  // case 3: node has both left and right children
  else {
    let minRight = currentNode.right;
    while (minRight.left !== null) {
      minRight = minRight.left;
    }
    const temp = minRight.data;
    this.remove(temp);
    currentNode.data = temp;
  }
  }

  min() {
    if (this.rootNode === null) {
      return null;
    }
    let currentNode = this.rootNode;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }
  
  max() {
    if (this.rootNode === null) {
      return null;
    }
    let currentNode = this.rootNode;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};