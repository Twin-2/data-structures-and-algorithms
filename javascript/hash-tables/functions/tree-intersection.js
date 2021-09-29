'use strict';
const HT = require('./hashTable.js');


function treeIntersection(bt1, bt2) {
    let ht = new HT(16);
    let output = [];


    function addToHashTable() {
        let _climb = (node) => {
            ht.add(node.value.toString(), true);
            if (node.left) _climb(node.left);
            if (node.right) _climb(node.right);
        }
        _climb(bt1.root);
    };
    addToHashTable(bt1);

    function addToOutput() {
        let _climb = (node) => {
            if (ht.contains(node.value.toString())) { output.push(node.value) };
            if (node.left) _climb(node.left);
            if (node.right) _climb(node.right);
        }
        _climb(bt2.root);
    };
    addToOutput(bt2);
    return output
};

module.exports = treeIntersection;