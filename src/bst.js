export default class BST {
  constructor() {
    this.root = null;
  }

  insertNode(insertedNode) {
    if(this.root === null) {
      this.root = insertedNode;
    } else {
      let currentNode = this.root;
      while(true) {
        if(currentNode.data > insertedNode.data) {
          if(currentNode.left === null) {
            currentNode.left = insertedNode;
            return this;
            // this refers to the entire BST
          } else {
            currentNode = currentNode.left;
          }
        } else if (currentNode.data < insertedNode.data) {
          if (currentNode.right === null) {
            currentNode.right = insertedNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          return this;
        }
      }
    }
  }

  search(value) {
    if(this.root.data === value) {
      return true;
    } else {
      let currentNode = this.root;
      while(true) {
        if(currentNode.data === value) {
          return true;
        } else if (currentNode.data > value) {
          currentNode = currentNode.left;
        } else if (currentNode.data < value) {
          currentNode = currentNode.right;
        }
        if (currentNode === null) {
          return false;
        }
      }
    }
  }

  remove(value) {
    if(this.root === null) {
      return false;
    }

    if (!value) {
      if(this.root.left === null && this.root.right === null) {
        this.root.data = null;
        return this;
      } 
        // else {
        //   let currentNode = this.root;
        //   while(true) {
        //     if(currentNode.left !== null) {
        //       currentNode = currentNode.left;
        //     } else {
        //       currentNode.data = null;
        //       return this;
        //     }
        //   }
        // }

    } else if (this.root.data !== value) {
      return false;
    }
    
    // else if(this.root.data !== value) {
    //   // if there is a value and it's not the root node
    //   return false;
    // } 
      }
    }