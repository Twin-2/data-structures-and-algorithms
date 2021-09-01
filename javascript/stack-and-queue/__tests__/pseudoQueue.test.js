'use strict';

const PseudoQueue = require('../lib/pseudoQueue.js');

describe('pseudoQueue', () => {

    it('should be able to instatiate an empty pseudoQueue', () => {
        let pseudoQueue = new PseudoQueue();
        expect(pseudoQueue.front).toBe(0)
        expect(pseudoQueue.rear).toBe(0)
    })

    it('should be able to add multiple items to a que', () => {
        let pseudoQueue = new PseudoQueue();
        pseudoQueue.enqueue(1);
        pseudoQueue.enqueue(2);
        expect(pseudoQueue.stackA[1].value).toBe(2)
        expect(pseudoQueue.length).toBe(2)
    })

    it('should be able to add a item to the queue after removing one', () => {
        let pseudoQueue = new PseudoQueue();
        pseudoQueue.enqueue(1);
        pseudoQueue.enqueue(2);
        pseudoQueue.dequeue();
        pseudoQueue.enqueue(3);
        expect(pseudoQueue.front.value).toBe(2)
        expect(pseudoQueue.length).toBe(2)
        expect(pseudoQueue.rear.value).toBe(3)
    })

    it('should be able to pull the expected item from the que', () => {
        let pseudoQueue = new PseudoQueue();
        pseudoQueue.enqueue(1);
        pseudoQueue.enqueue(2);
        let dequeued = pseudoQueue.dequeue();
        expect(dequeued.value).toBe(1)
    })

    it('should be able to completely empty a que', () => {
        let pseudoQueue = new PseudoQueue();
        pseudoQueue.enqueue(1);
        pseudoQueue.enqueue(2);
        pseudoQueue.dequeue();
        pseudoQueue.dequeue();
        expect(pseudoQueue.length).toBe(0)
        expect(pseudoQueue.rear).toBe(undefined)
    })

    it('should return an error if depseudoQueue is called on an empty que', () => {
        let pseudoQueue = new PseudoQueue();
        let depseudoQueue = pseudoQueue.dequeue();
        expect(depseudoQueue).toBe('Queue is empty')
    })
})