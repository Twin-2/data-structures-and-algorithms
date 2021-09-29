'use strict';
const util = require('util')
const Hashtable = require('./functions/hashTable');
const repeatedWord = require('./functions/repeated-word');
const BT = require('../trees/trees/bt.js');
const treeIntersection = require('./functions/tree-intersection.js');

let bt1 = new BT();
let bt2 = new BT();
let people = new Hashtable(5);

bt1.addNode(1)
bt1.addNode(2)
bt1.addNode(3)
bt1.addNode(4)
bt1.addNode(5)
bt1.addNode(6)

bt2.addNode(77)
bt2.addNode(51)
bt2.addNode(62)
bt2.addNode(7)
bt2.addNode(8)
bt2.addNode(9)

// console.log(util.inspect(bt1, { showHidden: false, depth: null }))
console.log(treeIntersection(bt1, bt2))