'use strict'

const Hashtable = require('../functions/hashTable');


describe('HASH TABLE', () => {

    it('should be able to instantiate a new, empty table of a specified length', () => {
        let people = new Hashtable(5);
        expect(people.map.length).toBe(5)
    })

    it('should be able to add a key/value pair to the table', () => {
        let people = new Hashtable(5);
        people.add('David', 25)
        expect(people.map[2].head.value).toEqual({ 'David': 25 })
        expect(people.map[1]).toBe(undefined)
    })

    it('shoule be able to retrive a value based on a key', () => {
        let people = new Hashtable(5);
        people.add('David', 25)
        let retrieved = people.get("David")
        expect(retrieved).toBe(25)

    })

    it('should be able to return null if the key does not exist in the table', () => {
        let people = new Hashtable(5);
        people.add('David', 25)
        let retrieved = people.get("Daniel")
        expect(retrieved).toBe(null)
    })

    it('should handle collisions by creating a linked list and adding nodes', () => {
        let people = new Hashtable(5);
        people.add('David', 25)
        people.add('Caleb', 40)
        expect(people.map[2].head.value).toEqual({ 'David': 25 })
        expect(people.map[2].head.next).toBeDefined()
        expect(people.map[2].head.next.value).toEqual({ 'Caleb': 40 })

    })

    it('should be able to retrive the correct values from the table at a collision point', () => {
        let people = new Hashtable(5);
        people.add('David', 25)
        people.add('Caleb', 40)
        let retrieved = people.get('Caleb')
        expect(retrieved).toEqual(40)
        expect(people.hash('Esther')).toEqual(people.hash('David'))
        expect(people.get('Esther')).toBe(null)

    })

    it('should be be able to hash a key to an in-range value of the table', () => {
        let table1 = new Hashtable(5);
        let hash1 = table1.hash('abcdefg')
        let table2 = new Hashtable(20)
        let hash2 = table2.hash('abcdefg')
        expect(hash1).toBeGreaterThanOrEqual(0)
        expect(hash1).toBeLessThanOrEqual(5)
        expect(hash2).toBeGreaterThanOrEqual(0)
        expect(hash2).toBeLessThanOrEqual(20)
    })
})