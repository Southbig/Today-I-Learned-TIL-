class GraphWithAdjacencyMatrix {
    constructor() {
        this.matrix = [];
    }

    addVertex() {
        const currentLength = this.matrix.length;
        for (let i = 0; i < currentLength; i++) {
            this.matrix[i].push(0)
        }
        this.matrix.push(new Array(currentLength + 1).fill(0));
    }
    contains(vertax) {
        if (this.matrix[vertax]) {
            return true;
        }
        else {
            return false;
        }
    }

    addEdge(from, to) {
        const currentLength = this.matrix.length;
        if (from === undefined || to === undefined) {
            return;
        }
        if (from + 1 > currentLength || to + 1 > currentLength || from < 0 || to < 0) {
            return;
        }
        this.matrix[from][to] = 1;
    }

    hasEdge(from, to) {
        if (this.matrix[from][to] === 1) {
            return true;
        }
        else {
            return false;
        }
    }
    removeEdge(from, to) {
        const currentLength = this.matrix.length - 1;
        if (from === undefined || to === undefined) {
            return;
        }
        if (from > currentLength || to > currentLength || from < 0 || to < 0) {
            return;
        }
        this.matrix[from][to] = 0
    }
}
