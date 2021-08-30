'use strict'

const Stack = require('./lib/stack.js')
const Queue = require('./lib/queue.js')

const stack = new Stack();
const queue = new Queue();

// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// console.log('popped', stack.pop())
// stack.pop()
// stack.peek();
// stack.pop()
// stack.pop()
// stack.isEmpty()

// console.log(stack)

queue.enqueue(1);
queue.enqueue(2);
// queue.dequeue();
// queue.dequeue();
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();
queue.enqueue(5)
console.log(queue.peek())

console.log(queue)