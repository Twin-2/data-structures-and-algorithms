'use strict';

const Node = require('./node.js');

class Stack {
    constructor() {
        this.length = 0
        this.top = null
    }

    push(value) {
        this[this.length++] = new Node(value, this.top);
        this.top = this.length - 1
        return this
    }

    pop() {
        if (this.top === null) {
            console.log('Stack is empty')
            return 'Stack is empty'
        } else {
            let value = this[--this.length]
            delete this[this.top]
            this.top = value.next
            return value
        }
    }

    peek() {
        if (this.top === null) { return 'Stack is empty' }
        console.log(this[this.top])
        return this[this.top]
    }

    isEmpty() {
        if (this.top === null) {
            console.log(true)
            return true
        }
        console.log(false)
        return false
    }

}

module.exports = Stack;