'use strict';

const BT = require('./trees/bt')
const BST = require('./trees/bst')
const util = require('util');


const bt = new BT();
const bst = new BST();

// bt.addNode(1)
// bt.addNode(2)
// bt.addNode(3)
// bt.addNode(4)
// bt.addNode(5)
// bt.addNode(6)
// bt.addNode(7)
// bt.addNode(8)
// bt.addNode(9)
// bt.addNode(10)
// bt.addNode(11)
// bt.addNode(12)
// bt.addNode(13)

// console.log(bt.preOrder())
// console.log(bt.inOrder())
// console.log(bt.postOrder())
// console.log(bt.levelSearch())

bst.add(7);
bst.add(5);
bst.add(10);
bst.add(1);
bst.add(2)
bst.add(70);
bst.add(54);
bst.add(12);
// bst.add(111);
// bst.add(17)

console.log(bst.levelSearch())
console.log(util.inspect(bst, { showHidden: false, depth: null }))
console.log(bst.contains(3))