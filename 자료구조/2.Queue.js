class {
    constructor() {
        this.storage = {};
        this.front = 0;
        this.rear = 0;
    }

    size() {
        return this.rear - this.front
    }

    enqueue(element) {
        this.storage[this.rear] = element;
        this.rear++
    }

    dequeue() {
        if (this.size() < 0) {
            return;
        }
        const result = this.storage[this.front];
        delete this.storage[this.front];
        this.front--

        return result;
    }
}