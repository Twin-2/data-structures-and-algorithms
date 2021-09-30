'use strict'

const Hashtable = require('../functions/hashTable');
const leftJoin = require('../functions/leftJoinExternal');

describe('LEFT JOIN', () => {
    it('should output an array of the results that fit left join logic ', () => {
        let ht1 = new Hashtable(11)
        let ht2 = new Hashtable(11)
        ht1.add('a', 'first');
        ht1.add('b', 'second');
        ht2.add('a', 'next')
        let join = leftJoin(ht1, ht2)
        expect(join).toEqual([['a', 'first', 'next'], ['b', 'second']])
    })

    it('should output all values of the left tree', () => {
        let ht1 = new Hashtable(11)
        let ht2 = new Hashtable(11)
        ht1.add('a', 'only');
        ht1.add('b', 'here');
        let join = leftJoin(ht1, ht2)
        expect(join).toEqual([['a', 'only'], ['b', 'here']])
    })

    it('should not output values from the right tree that are not in the left tree', () => {
        let ht1 = new Hashtable(11)
        let ht2 = new Hashtable(11)
        ht1.add('a', 'first');
        ht1.add('b', 'second');
        ht2.add('c', 'not there')
        ht2.add('d', 'also not here')
        let join = leftJoin(ht1, ht2)
        expect(join).toEqual([['a', 'first'], ['b', 'second']])
    })
})