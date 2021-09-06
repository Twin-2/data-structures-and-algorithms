'use strict';

const BST = require('../trees/bst.js')

let sampleTree = {
    value: 3,
    left: {
        value: 2,
        left: {
            value: 1,
            left: null,
            right: null,
        },
        right: null
    },
    right: {
        value: 5,
        left: {
            value: 4,
            left: null,
            right: null
        },
        right: {
            value: 6,
            left: null,
            right: null
        }
    }
}

describe('BINARY SEARCH TREE', () => {
    it('should should be able to search the tree bredth first', () => {
        let bst = new BST(sampleTree);
        let bredth = bst.levelSearch();
        expect(bredth).toEqual([3, 2, 5, 1, 4, 6])
    })
    it('should be able to add a sinlge node to the tree', () => {
        let bst = new BST();
        bst.add(1)
        expect(bst.root.value).toEqual(1)
    })

    it('should be able to create an empty tree', () => {
        let bst = new BST();
        expect(bst.root).toBe(null)
    })
    it('should be able to search the tree for a given value', () => {
        let bst = new BST(sampleTree);
        let search = bst.contains(1)
        let notSearch = bst.contains(7)
        expect(search).toBe(true)
        expect(notSearch).toBe(false)
    })
    it('should be able to add a node to the correct place per BST standards', () => {
        let bst = new BST(sampleTree);
        bst.add(12)
        bst.add(3)
        let levelSearch = bst.levelSearch();
        expect(levelSearch).toEqual([3, 2, 5, 1, 3, 4, 6, 12])
    })
})