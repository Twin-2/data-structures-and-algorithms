'use strict'

const Stack = require('./lib/stack.js')
const Queue = require('./lib/queue.js')

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log('popped', stack.pop())
// stack.pop()
stack.peek();
// stack.pop()
// stack.pop()
stack.isEmpty()

console.log(stack)