'use strict'

const Stack = require('./lib/stack.js')
const Queue = require('./lib/queue.js')
const PseudoQueue = require('./lib/pseudoQueue.js')
const AnimalShelter = require('./lib/animalShelter.js');

const stack = new Stack();
const queue = new Queue();
const pseudoQueue = new PseudoQueue();
const animalShelter = new AnimalShelter();
const validate = require('./lib/validateBrackets.js')

// queue.enqueue(1);
// queue.enqueue(2);
// queue.dequeue();
// queue.enqueue(3);
// queue.dequeue();
// queue.enqueue(5)
// queue.dequeue()
// queue.enqueue(4);
// console.log(queue.peek())

// console.log(queue)

// pseudoQueue.enqueue(1)
// pseudoQueue.enqueue(2)
// pseudoQueue.enqueue(3)
// console.log('dequeue', pseudoQueue.dequeue())
// pseudoQueue.enqueue(4)
// console.log('queue', pseudoQueue)


// animalShelter.enqueue('dog', 7)
// animalShelter.enqueue('dog', 12)
// animalShelter.enqueue('dog', 5)
// animalShelter.dequeue('cat')
// animalShelter.enqueue('cat', 19)
// animalShelter.enqueue('bird', 23)
// animalShelter.dequeue('bird')
// animalShelter.enqueue('cat', 1)
// animalShelter.enqueue('bird', 23)
// animalShelter.dequeue('bird')
// console.log(animalShelter)

console.log(validate('()[[Extra Ch(aracters]]'))