'use strict';

const BT = require('../trees/bt.js')
const util = require('util');


let sampleTree = {
    value: 1,
    left: {
        value: 2,
        left: null,
        right: {
            value: 4,
            left: {
                value: 6,
                left: null,
                right: null
            },
            right: null
        }
    },
    right: {
        value: 3,
        left: {
            value: 5,
            left: null,
            right: null
        },
        right: null
    }
}

describe('BINARY SEARCH TREE', () => {
    it('should should be able to search the tree bredth first', () => {
        let bt = new BT(sampleTree);
        let bredthFirst = bt.levelSearch();
        expect(bredthFirst).toEqual([1, 2, 3, 4, 5, 6])
    })
    it('should shoulde be able to return the results of a depth first Pre-Order search', () => {
        let bt = new BT(sampleTree)
        let preOrder = bt.preOrder();
        expect(preOrder).toEqual([1, 2, 4, 6, 3, 5])
    })
    it('should shoulde be able to return the results of a depth first In-Order search', () => {
        let bt = new BT(sampleTree)
        let inOrder = bt.inOrder();
        expect(inOrder).toEqual([2, 6, 4, 1, 5, 3])
    })
    it('should shoulde be able to return the results of a depth first Post-Order search', () => {
        let bt = new BT(sampleTree)
        let postOrder = bt.postOrder();
        expect(postOrder).toEqual([6, 4, 2, 5, 3, 1])
    })
    it('should be able to create an empty tree', () => {
        let bt = new BT()
        expect(bt.root).toBe(null)
    })
    it('should be able to find the highest value in the tree', () => {
        let bt = new BT(sampleTree);
        let max = bt.findMax()
        expect(max).toEqual(6)
    })
    it('should be able to add a node to the tree following a bredth filling approach', () => {
        let bt = new BT(sampleTree);
        bt.addNode(10)
        let bredthFirst = bt.levelSearch();
        expect(bredthFirst).toEqual([1, 2, 3, 10, 4, 5, 6])
    })
})