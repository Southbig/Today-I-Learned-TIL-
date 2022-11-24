class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BinarySearchTree(value)
      } else {
        this.left.insert(value)
      }
    } else if (value > this.value) {
      if (this.right === null) {
        this.right = new BinarySearchTree(value)
      } else {
        this.right.insert(value)
      }
    } else {
      return;
    }
  }

  contains(value) {
    if (this.value === value) {
      return true;
    }
    if (value < this.value) {
      if (this.left !== null) {
        if (this.left === value) {
          return true;
        } else {
          return this.left.contains(value);
        }
      }
    }
    if (value > this.value) {
      if (this.right !== null) {
        if (this.right === value) {
          return true;
        } else {
          return this.right.contains(value);
        }
      }
    }
    return false;
  }

  preoder(callback) {
    callback(this.value);
    if (this.left) {
      this.left.preoder(callback)
    }
    if (this.right) {
      this.right.preoder(callback)
    }
  }
  inoder(callback) {
    if (this.left) {
      this.left.insert(callback)
    }
    callback(this.value)
    if (this.right) {
      this.right.inoder(callback)
    }
  }
  postoder(callback) {
    if (this.left) {
      this.left.postoder(this.value)
    }
    if (this.right) {
      this.right.postoder(this.value)
    }
    callback(this.value)
  }
}