class Tree {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    insertNode(value) {
        const childNode = newTree(value);
        this.children.push(childNode);
    }

    contains(value) {
        if (this.value === value) {
            return;
        }
        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i].contains(value)) {
                return true;
            }
        }
        return false;
    }
}