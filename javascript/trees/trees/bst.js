'use strict';

const BT = require('./bt');
const Node = require('../node');

class BST extends BT {
    constructor(props) {
        super(props)
    }

    add(value) {
        let insert = (node, direction) => {
            if (!node[direction]) {
                node[direction] = new Node(value)
                return
            }
            if (value === node[direction].value) insert(node[direction], 'left')
            if (value < node[direction].value) insert(node[direction], 'left')
            if (value > node[direction].value) insert(node[direction], 'right')
        }
        insert(this, 'root')
        return this.root
    }

    contains(value) {
        let _climb = (node, value) => {
            // console.log('111', node.value)
            if (!node) return false

            if (node.value === value) return true

            if (value < node.value) return _climb(node.left, value)

            if (value > node.value) return _climb(node.right, value)
        }
        let result = _climb(this.root, value)
        return result
    }

}


module.exports = BST;