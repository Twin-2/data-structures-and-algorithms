'use strict';

const treeIntersection = require('../functions/tree-intersection.js');
const BT = require('../../trees/trees/bt.js');

const bt1 = new BT();
const bt2 = new BT();

bt1.addNode(1)
bt1.addNode(2)
bt1.addNode(3)

bt2.addNode(2)
bt2.addNode(3)
bt2.addNode(4)

describe('TREE INTERSECTION', () => {

    it('should be output an array of ONLY the shared values between two trees', () => {
        let shared = treeIntersection(bt1, bt2)
        expect(shared).toEqual([2, 3])
    })

    it('should return an empty array if there are no shared values between the trees', () => {
        let unique1 = new BT();
        unique1.addNode(1)
        let unique2 = new BT();
        unique2.addNode(2)
        let shared = treeIntersection(unique1, unique2)
        expect(shared).toEqual([])
    })
})
