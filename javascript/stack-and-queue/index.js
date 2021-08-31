'use strict'

const Stack = require('./lib/stack.js')
const Queue = require('./lib/queue.js')
const PseudoQueue = require('./lib/pseudoQueue.js')

const stack = new Stack();
const queue = new Queue();
const pseudoQueue = new PseudoQueue();

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

// queue.enqueue(1);
// queue.enqueue(2);
// // // queue.dequeue();
// queue.enqueue(3);
// // // queue.dequeue();
// // queue.enqueue(5)
// queue.dequeue();
// queue.enqueue(4);
// // console.log(queue.peek())

// console.log(queue)

pseudoQueue.enqueue(1)
pseudoQueue.enqueue(2)
pseudoQueue.enqueue(3)
pseudoQueue.dequeue();
pseudoQueue.enqueue(4)
console.log('queue', pseudoQueue)
