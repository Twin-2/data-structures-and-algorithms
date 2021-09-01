'use strict';

const Queue = require('../lib/queue.js');

describe('QUEUE', () => {

    it('should be able to instatiate an empty queue', () => {
        let queue = new Queue();
        expect(queue.storage).toMatchObject({})
    })

    it('should be able to add multiple items to a que', () => {
        let queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.storage[1].value).toBe(2)
        expect(queue.length).toBe(2)
    })

    it('should be able to add a item to the que after removing one', () => {
        let queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.dequeue();
        queue.enqueue(3);
        expect(queue.front).toBe(1)
        expect(queue.length).toBe(2)
        expect(queue.queued).toBe(3)
        expect(queue.storage[2].value).toBe(3)
    })

    it('should be able to pull the expected item from the que', () => {
        let queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        let dequeued = queue.dequeue();
        expect(dequeued.value).toBe(1)
    })

    it('should be able to peek at the item at the front of the que', () => {
        let queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        let peeked = queue.peek();
        expect(peeked.value).toBe(1)
    })

    it('should be able to completely empty a que', () => {
        let queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.dequeue();
        queue.dequeue();
        expect(queue.length).toBe(0)
        expect(queue.rear).toBe(null)
    })

    it('should return an error if peek or dequeue is called on an empty que', () => {
        let queue = new Queue();
        let peek = queue.peek()
        let dequeue = queue.dequeue();
        expect(peek).toBe('Queue is empty')
        expect(dequeue).toBe('Queue is empty')
    })

    it('should be respond appropriately when isEmpty is called', () => {
        let queue = new Queue();
        let empty = queue.isEmpty();
        queue.enqueue(1);
        let notEmpty = queue.isEmpty();
        expect(empty).toBe(true)
        expect(notEmpty).toBe(false)

    })
})