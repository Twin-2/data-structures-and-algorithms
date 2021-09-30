'use strict';
const util = require('util')
const Hashtable = require('./functions/hashTable');
const repeatedWord = require('./functions/repeated-word');
const BT = require('../trees/trees/bt.js');
const treeIntersection = require('./functions/tree-intersection.js');
const leftJoinInPlace = require('./functions/leftJoinInPlace.js');
const leftJoinExternal = require('./functions/leftJoinExternal.js');


let hash1 = new Hashtable(5);
let hash2 = new Hashtable(5);

hash1.add('a', 'the')
hash1.add('b', 'big')
hash1.add('c', 'dog')
hash1.add('e', 'solo')

hash2.add('a', 'fat')
hash2.add('b', 'bad')
hash2.add('d', 'new dog')

console.log(util.inspect(hash1, { showHidden: false, depth: null }))
// leftJoinInPlace(hash1, hash2)
console.log(util.inspect(hash1, { showHidden: false, depth: null }))
console.log(leftJoinExternal(hash1, hash2))