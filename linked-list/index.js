'use strict';

const LinkedList = require('./lib/ll.js');

let LL = new LinkedList();
LL.append(1);

console.log(LL.toString())
console.log('nth', LL.nthFromEnd(1))