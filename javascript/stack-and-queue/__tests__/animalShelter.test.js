'use strict';

const AnimalShelter = require('../lib/animalShelter.js');



describe('ANIMAL SHELTER QUEUE', () => {
    it('should be able to create an empty queue', () => {
        let shelter = new AnimalShelter();
        expect(shelter.storage).toMatchObject({})
        expect(shelter.length).toBe(0)
    })

    it('should be able to add multiple animals to the queue', () => {
        let shelter = new AnimalShelter();
        shelter.enqueue('dog', 7)
        shelter.enqueue('cat', 7)
        expect(shelter.storage[0].type).toBe('dog')
        expect(shelter.storage[1].type).toBe('cat')
        expect(shelter.length).toBe(2)
    })

    it('should be able to remove a desired animal type from the shelte', () => {
        let shelter = new AnimalShelter();
        shelter.enqueue('dog', 7)
        shelter.enqueue('cat', 7)
        shelter.enqueue('dog', 2)
        let dequeued = shelter.dequeue('cat')
        shelter.enqueue('cat', 1)
        let dequeued2 = shelter.dequeue('cat')
        let dequeueFirst = shelter.dequeue('dog')
        expect(dequeued.type).toBe('cat')
        expect(dequeued2.type).toBe('cat')
        expect(dequeueFirst.type).toBe('dog')
        expect(shelter.length).toBe(1)
    })

    it('should return the animal from the shelter that has been there the longest if your preference is not it the shelter', () => {
        let shelter = new AnimalShelter();
        shelter.enqueue('dog', 7)
        shelter.enqueue('dog', 8)
        shelter.enqueue('dog', 2)
        let dequeued = shelter.dequeue('cat')
        expect(dequeued.type).toBe('dog')
        expect(shelter.length).toBe(2)
    })

    it('should be able to add an animal after pulling one from the shelter', () => {
        let shelter = new AnimalShelter();
        shelter.enqueue('dog', 7)
        shelter.enqueue('cat', 7)
        shelter.enqueue('dog', 2)
        let dequeued = shelter.dequeue('cat')
        shelter.enqueue('cat', 1)
        expect(shelter.storage[3].type).toBe('cat')
        expect(shelter.length).toBe(3)
    })

})