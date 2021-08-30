'use strict';

const LinkedList = require('./lib/ll.js');
const zip = require('./lib/zip.js')

let LL2 = new LinkedList();
let LL = new LinkedList();
LL.append(1);
LL.append(2);
// LL.append(3);
// LL.append(4);
// LL.append(5);
LL2.append('a');
LL2.append('b');
LL2.append('c');
// LL2.append('d');
// LL2.append('e');

console.log('zip', zip(LL, LL2))
console.log('string', LL.toString())

// console.log('nth', LL.nthFromEnd(1))