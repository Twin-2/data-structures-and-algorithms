'use strict';

const BT = require('./trees/bt')
const BST = require('./trees/bst')
const util = require('util');


const bt = new BT();

bt.addNode(1)
bt.addNode(2)
bt.addNode(3)
bt.addNode(4)
bt.addNode(5)
bt.addNode(6)
bt.addNode(7)
bt.addNode(8)
bt.addNode(9)
bt.addNode(10)
bt.addNode(11)
bt.addNode(12)
bt.addNode(13)

console.log(bt.preOrder())
console.log(bt.inOrder())
console.log(bt.postOrder())
console.log(bt.levelSearch())
console.log(util.inspect(bt, { showHidden: false, depth: null }))