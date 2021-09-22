'use strict';

// const mergeSort = require('./mergeSort')


function mergeSort(arr) {
    let n = arr.length
    if (n > 1) {
        let mid = n / 2
        console.log(mid)
        let left = arr.slice(0, mid)
        console.log('left', left)
        let right = arr.slice(mid, n)
        console.log('right', right)
        mergeSort(left)
        mergeSort(right)
        merge(left, right, arr)
        console.log('arr', arr)
    }
    return arr
}
function merge(left, right, arr) {
    let i = 0
    let j = 0
    let k = 0
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k] = left[i]
            i = i + 1
        } else {
            arr[k] = right[j]
            j = j + 1
        }
        k++
    }
    if (i = left.length) {
        while (j < right.length) {
            arr[k] = (right[j])
            j = j + 1
            k = k = 1
        }
    } else {
        while (i < left.length) {
            arr[k] = (left[i])
            i = i + 1
            k = k + 1
        }
    }
}


let sample1 = [8, 4, 23, 42, 16, 15]
let sample2 = [20, 18, 12, 8, 5, -2];
let sample3 = [5, 12, 7, 5, 5, 7]
let sample4 = [2, 3, 5, 7, 13, 11]
let sample5 = [1, 2, 3, 4, 5]

// let newArr = [...sample1, ...sample2]
// console.log(newArr)
console.log('a', sample1)
console.log(mergeSort(sample1))
console.log('b', sample1)