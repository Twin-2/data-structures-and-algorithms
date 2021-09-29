'use strict';
const util = require('util');


const HT = require('./hashTable');

let ht = new HT(5);

function repeatedWord(string) {
    let words = string.split(' ');
    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();
        if (ht.contains(word)) { return word };
        ht.add(word, word);
    };
    return 'No repeated words';
}

module.exports = repeatedWord;