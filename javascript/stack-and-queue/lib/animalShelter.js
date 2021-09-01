'use strict';

const Animal = require('./animals.js')

class AnimalShelter {
    constructor() {
        this.storage = {}
        this.front = 0
        this.rear = 0
        this.length = 0
        this.queued = 0
    }


    enqueue(type, age) {

        this.storage[this.queued++] = new Animal(type, age)
        this.rear = this.queued - 1
        this.length++
    }

    dequeue(desire) {
        let search = this.front
        let current = this.storage[search]
        if (desire === current.type) {
            delete this.storage[search]
            this.length--
            this.front++
            return current
        }
        while (desire !== current.type) {
            search++
            if (search > this.rear) {
                let saved = this.storage[this.front]
                delete this.storage[this.front]
                this.front++
                this.length--
                return saved
            }
            current = this.storage[search]
            if (!current) {
                search++;
                current = this.storage[search]
            }
        }
        if (search === this.rear) {
            this.rear--
        }
        delete this.storage[search]
        this.length--
        return current
    }

}

module.exports = AnimalShelter;