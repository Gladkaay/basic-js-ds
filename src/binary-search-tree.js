const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root1 = null;
  }

  root() {
    return this.root1;
  }

  add(data) {
    this.root1 = addNode (this.root1, data);

    function addNode(node, data) {
      if(!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data > node.data) {
        node.right = addNode(node.right, data);
      } else {
        node.left = addNode(node.left, data);
      }
      return node;
    }
  }

  has(data) {
    return searchNode(this.root1, data);

    function searchNode(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data < node.data) {
        return searchNode(node.left, data);
      } else {
        return searchNode(node.right, data);
      }
    }
  }

  find(data) {
    return findNode(this.root1, data);

    function findNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = findNode(node.left, data);
        return node.left;
      } else {
        node.right = findNode(node.right, data);
        return node.right;
      }
      // return node;
    }
  }

  remove(data) {
    this.root1 = removeNode(this.root1, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }        
        if (!node.left) {
          node = node.right;
          return node;
        }
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;

        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.root1) {
      return null;
    }
    let node = this.root1;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.root1) {
      return null;
    }
    let node = this.root1;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};