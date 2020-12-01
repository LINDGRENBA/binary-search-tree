import BST from '../src/bst.js';
import BSTNode from '../src/bst-node.js';

describe ('binarySearchTree', () => {

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
});