'use strict';

const Node = require('./node.js');


class Queue {
    constructor() {
        this.storage = {}
        this.queued = 0
        this.front = 0
        this.rear = 0
        this.length = 0
    }

    //adds a node to the queue
    //if the que is empty then it is the front,
    //else it's next is null and the previous node points to it
    enqueue(value) {
        if (this.length === 0) {
            this.storage[this.queued++] = new Node(value, null)
            this.length++
        } else {
            this.storage[this.rear].next = this.queued
            this.storage[this.queued++] = new Node(value, null)
            this.rear++
            this.length = this.rear - this.front
        }
        return this;
    }

    dequeue() {
        if (this.length === 0) {
            console.log('queue is empty')
            return 'Queue is emppty'
        }
        let dequeued = this.storage[this.front]
        delete this.storage[this.front]
        this.front++
        //  = dequeued.next
        this.length = this.rear - this.front
        return dequeued
    }

    peek() {
        return this.storage[this.front] ? this.storage[this.front] : 'Queue is empty'
    }

    isEmpty() {
        if (this.front === null) {
            console.log(true)
            return true
        }
        console.log(false)
        return false
    }
}



module.exports = Queue;