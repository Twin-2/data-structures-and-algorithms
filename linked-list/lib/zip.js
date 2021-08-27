'use strict';

// const Node = require('./node.js');
// const LinkedList = require('./ll.js');;

const zip = function (llA, llB) {
    // let newLL = new LinkedList();
    // newLL.head = (llA.head)
    let current = llA.head;
    let currentB = llB.head;
    let savedNext = {};
    let savedNextB = {}
    while (current.next) {
        if (!currentB.next) {
            currentB.next = current
            return llA
        } else {
            savedNext = current.next;
            current.next = currentB;
            savedNextB = currentB.next
            currentB.next = savedNext
            currentB = savedNextB;
            current = savedNext;
            if (!current.next) {
                current.next = currentB
                console.log('1')
                return llA
            }
        }
    }
    if (!current.next && !currentB.next) {
        current.next = currentB
        console.log("!!!!!!!!!!!!")
        console.log('4')
    }

    // which ever list is still there is the rest of the LL

    return llA
}


module.exports = zip;