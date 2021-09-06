'use strict';

const Node = require('../node')

class binaryTree {
    constructor(root = null) {
        this.root = root
    }

    //this addNode works in a level pattern making sure all children in one level are full before going to the next.
    addNode(value) {
        let node = new Node(value)
        if (!this.root) {
            this.root = node
            return this.root
        } else {
            let queue = [];
            queue.push(this.root)
            while (queue.length > 0) {
                let current = queue.shift()
                if (!current.left) {
                    current.left = node
                    return this.root
                } else {
                    queue.push(current.left)
                }
                if (!current.right) {
                    current.right = node
                    return this.root
                } else {
                    queue.push(current.right)
                }
            }
            return this.root
        }
    }

    levelSearch() {
        let queue = [];
        let results = []
        queue.push(this.root)
        while (queue.length > 0) {
            let current = queue.shift()
            results.push(current.value)
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
        return results
    }

    // root, left, right
    preOrder() {
        let results = []

        let _climb = (node) => {
            results.push(node.value)
            if (node.left) _climb(node.left)
            if (node.right) _climb(node.right)
        }
        _climb(this.root)
        return results
    }
    //left, root, right
    inOrder() {
        let results = []

        let _climb = (node) => {
            if (node.left) _climb(node.left)
            results.push(node.value)
            if (node.right) _climb(node.right)
        }
        _climb(this.root)
        return results
    }
    //left, right, root
    postOrder() {
        let results = []

        let _climb = (node) => {
            if (node.left) _climb(node.left)
            if (node.right) _climb(node.right)
            results.push(node.value)
        }
        _climb(this.root)
        return results
    }
}

module.exports = binaryTree;