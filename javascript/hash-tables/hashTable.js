'use strict';
const util = require('util')
const Node = require('../linked-list/lib/node')
const LL = require('../linked-list/lib/ll')


class Hashtable {
    constructor(size) {
        this.size = size,
            this.map = new Array(size).fill()
    }

    hash(key) {
        return key.split('').reduce((acc, letter, idx) => {
            return acc + letter.charCodeAt() * idx;
        }, 0) * 599 % this.size
    }

    add(key, value) {
        let bucketNumber = this.hash(key)
        // console.log(key, bucketNumber)
        if (!this.map[bucketNumber]) { this.map[bucketNumber] = new LL(); }
        let entry = { [key]: value }
        this.map[bucketNumber].append(entry)
    }

    get(key) {
        let bucketNumber = this.hash(key)
        if (!this.map[bucketNumber]) { return null }
        let current = this.map[bucketNumber].head;
        while (current) {
            let data = current.value
            if (data[key]) return data[key]
            current = current.next
        }
        return null
    }

    contains(key) {
        let bucketNumber = this.hash(key);
        if (!this.map[bucketNumber]) return false
        if (this.map[bucketNumber]) {
            let current = this.map[bucketNumber].head;
            while (current) {
                let data = current.value
                if (data[key]) return true
                current = current.next
            }
            return false
        }
    }
}

module.exports = Hashtable