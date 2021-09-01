'use strict';

const Stack = require('../lib/stack.js');

// const stackA = new Stack();
// const stackB = new Stack();

class PseudoQueue {
    constructor() {
        this.stackA = new Stack();
        this.stackB = new Stack();
        // this.queued = 0
        this.front = 0
        this.rear = 0
        this.length = 0
    }

    enqueue(value) {
        this.stackA.push(value);
        this.front = this.stackA[0]
        this.rear = this.stackA[this.stackA.top]
        this.length++
        // console.log('stacka', this.stackA)
        return this
    }

    dequeue() {
        if (this.length === 0) { return 'Queue is empty' }
        while (this.stackA.length > 0) {
            let popped = this.stackA.pop();
            console.log('popped', popped)
            console.log(this.stackA.length)
            this.stackB.push(popped.value)
        }
        let dequeued = this.stackB.pop()
        while (this.stackB.length > 0) {
            let popped = this.stackB.pop();
            this.stackA.push(popped.value)
        }
        this.front = this.stackA[0]
        this.rear = this.stackA[this.stackA.top]
        console.log(dequeued.value)
        this.length--
        return dequeued
    }

}

module.exports = PseudoQueue;