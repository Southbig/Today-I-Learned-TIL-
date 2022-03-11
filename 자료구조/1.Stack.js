class Stack {
    constructor() {
        this.storage = {};
        this.top = 0;
    }
    size() {
        return this.top;
    }

    push(element) {
        this.storage[this.top] = element;
        this.top++
    }
    pop() {
        if (this.size() < 0) {
            return;
        }
        const result = this.storage[this.top - 1];
        delete this.storate[this.top - 1];
        this.top--

        return result
    }
}