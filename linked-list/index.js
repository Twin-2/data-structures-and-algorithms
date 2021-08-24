'use strict';

const LinkedList = require('./lib/ll.js');

let LL = new LinkedList();
LL.append(1);
LL.append(2);
LL.append(3);
LL.append(4);
LL.append(5);
LL.insertBefore(1, 'n')
console.log(LL.toString())