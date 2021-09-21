'use strict';

const insertsionSort = require('../insertion-sort.js')

describe('INSERSION SORT', () => {

    it('should be able to sort an array from low to high numerical value', () => {
        let array = [8, 4, 23, 42, 16, 15]
        let sorted = insertsionSort(array)
        expect(sorted).toEqual([4, 8, 15, 16, 23, 42])
    })

    it('should sort an array even if there are negative values', () => {
        let array = [20, 18, 12, 8, 5, -2]
        let sorted = insertsionSort(array)
        expect(sorted).toEqual([-2, 5, 8, 12, 18, 20])
    })

    it('should still execute and return a sorted array even if the array is alreadyt sorted', () => {
        let array = [1, 2, 3, 4, 5]
        let sorted = insertsionSort(array)
        expect(sorted).toEqual([1, 2, 3, 4, 5])
    })
})