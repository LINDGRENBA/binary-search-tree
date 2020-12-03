import BST from '../src/bst.js';
import BSTNode from '../src/bst-node.js';

describe ('binarySearchTree', () => {

  const pbst = new BST();

  beforeEach(() => {
    pbst.insertNode(new BSTNode(4));
    pbst.insertNode(new BSTNode(2));
    pbst.insertNode(new BSTNode(6));
    pbst.insertNode(new BSTNode(1));
    pbst.insertNode(new BSTNode(3));
    pbst.insertNode(new BSTNode(5));
    pbst.insertNode(new BSTNode(7));
  });


  // tests to create BST and insert nodes
  test('should initialize a binary search tree with a root of null', () => {
    let bst = new BST();
    expect(bst.root).toEqual(null);
  });

  test('should create a new root node', () => {
    let bst = new BST();
    let node = new BSTNode(36);
    bst.insertNode(node);
    expect(bst.root).toEqual(node);
  });

  test('should add a child node to the left side of the root node', () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insertNode(rootNode);
    let newNode = new BSTNode(22);
    bst.insertNode(newNode);
    expect(rootNode.left.data).toEqual(22);
  });

  test('should add a child node to the right side of the root node', () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insertNode(rootNode);
    let newNode = new BSTNode(48);
    bst.insertNode(newNode);
    expect(rootNode.right.data).toEqual(48);
  });

  test('should add a child to the left of a child node', () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insertNode(rootNode);
    let node2 = new BSTNode(22);
    bst.insertNode(node2);
    let node3 = new BSTNode(11);
    bst.insertNode(node3);
    expect(rootNode.left.left.data).toEqual(11);
  });

  test('should add a child to the right of a child node', () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insertNode(rootNode);
    let node2 = new BSTNode(48);
    bst.insertNode(node2);
    let node3 = new BSTNode(73);
    bst.insertNode(node3);
    expect(rootNode.right.right.data).toEqual(73);
  });

  test('should add a child to the left or right of a child node', () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insertNode(rootNode);
    let node2 = new BSTNode(22);
    bst.insertNode(node2);
    let node3 = new BSTNode(33);
    bst.insertNode(node3);
    expect(rootNode.left.right.data).toEqual(33);
  });

  test('should not add duplicate nodes', () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insertNode(rootNode);
    let node2 = new BSTNode(36);
    expect(bst.insertNode(node2)).toEqual({"root": {"data": 36, "left": null, "right": null}});
  });

    // tests for search method
    test('should return true if the root node is equal to 4', () => {
      expect(pbst.search(4)).toEqual(true);
    });
  
    test('should return false if the root node is equal to 31', () => {
      expect(pbst.search(31)).toEqual(false);
    });
  
    test('should return true if the first child node on the left is equal to 2', () => {
      expect(pbst.search(2)).toEqual(true);
    });
  
    test('should return true if the tree includes 7', () => {
      expect(pbst.search(7)).toEqual(true);
    });
  
    test('should return true if the tree includes 5', () => {
      expect(pbst.search(5)).toEqual(true);
    });

    // tests for remove method
    // 4, 2, 6, 1, 3, 5, 7

    test('should return false if the node to be removed does not exist', () => {
      expect(pbst.remove(8)).toEqual(false);
    });

    test('should return true if the node does exist', () => {
      expect(pbst.remove(4)).toEqual(true);
    });
});