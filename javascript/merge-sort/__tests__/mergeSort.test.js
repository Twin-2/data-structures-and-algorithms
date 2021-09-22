'use strict';

const mergeSort = require('../mergeSort.js');

let sample1 = [8, 4, 23, 42, 16, 15]
let sample2 = [20, 18, 12, 8, 5, -2];
let sample3 = [5]

describe('MERGE SORT', () => {

    it('should sort a list from lowest to highest', () => {
        let merge = mergeSort(sample1);
        expect(merge).toEqual([4, 8, 15, 16, 23, 42])
    })

    it('should be able to sort a list that has negative numbers', () => {
        let merge = mergeSort(sample2);
        expect(merge).toEqual([-2, 5, 8, 12, 18, 20])
    })

    it('should be able to sort an array of length 1', () => {
        let merge = mergeSort(sample3);
        expect(merge).toEqual([5])
    })
})