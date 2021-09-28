'use strict';
const util = require('util')


const HT = require('./hashTable')

let ht = new HT(5)

function repeatedWord(string) {
    let words = string.split(' ')
    let repeat = 'No repeated words'
    words.forEach((item, idx) => {
        let word = item.toLowerCase()
        if (ht.contains(word)) repeat = word
        ht.add(word, idx + 1)
    });
    return repeat
}

module.exports = repeatedWord