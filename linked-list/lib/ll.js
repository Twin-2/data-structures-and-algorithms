'use strict';

const Node = require('./node.js')

class LinkedList {
    constructor() {
        this.head = null;
    }

    // adds a node at the end of the LL
    append(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    // adds a node at the searched value of the LL
    insertAfter(search, data) {
        let node = new Node(data);
        let current = this.head;
        let searchedNode = {};
        while (current.next) {
            if (current.value === search) {
                searchedNode = current.next;
                current.next = node;
                node.next = searchedNode;
            }
            current = current.next;
        } if (current.value === search) {
            searchedNode = current.next;
            current.next = node;
            node.next = searchedNode;
        }
    }

    insertBefore(search, data) {
        let node = new Node(data);
        if (this.head.value === search) {
            let ll = this.head;
            this.head = node;
            node.next = ll;
        } else {
            let current = this.head;
            let searchedNode = {};
            let previousNode = this.head;
            while (current.next) {
                if (current.value === search) {
                    searchedNode = current
                    previousNode.next = node
                    node.next = searchedNode;
                }
                previousNode = current
                current = current.next;
            } if (current.value === search) {
                searchedNode = current
                previousNode.next = node
                node.next = searchedNode;
            }
        }
    }

    // adds a value at the beginning of the LL
    shift(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            let ll = this.head;
            this.head = node;
            node.next = ll;
        }
    }

    // search ll and return true if contains value else false
    includes(value) {
        let current = this.head
        if (current.value === value) {
            return true
        } else {
            while (current.next) {
                if (current.value === value) {
                    return true
                }
                current = current.next
            }
        }
        return false
    }

    // returns a string of allthe VALUES. Ex: "{ a } -> { b } -> { c } -> NULL"
    toString() {
        let current = this.head;
        let string = '';
        while (current.next) {
            string += `{ ${current.value} } -> `
            current = current.next
        }
        string += `{ ${current.value} } -> NULL`;
        return string;
    }
}

module.exports = LinkedList;