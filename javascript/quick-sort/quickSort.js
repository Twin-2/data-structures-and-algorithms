'use strict';

function quickSort(arr) {
    sort(arr, 0, arr.length - 1)
    return arr
}

function sort(arr, left, right) {
    if (left >= right) { return }
    let position = partition(arr, left, right)
    sort(arr, left, position - 1)
    sort(arr, position + 1, right)
    // return arr
}

function partition(arr, left, right) {
    // console.log('arr', arr, left, right)
    let pivot = arr[right]
    // console.log('pivot', pivot)
    let low = left - 1
    // console.log('low', low)
    for (let i = left; i < right; i++) {
        // console.log('!!!!', arr[i])
        if (arr[i] <= pivot) {
            low++
            swap(arr, i, low)
            // console.log('yup', arr[i])
        }
        // console.log('2')
    }
    // console.log('nope')
    swap(arr, right, low + 1)
    // console.log(arr)
    return low + 1
}

function swap(arr, i, low) {
    let temp = arr[i]
    arr[i] = arr[low]
    arr[low] = temp
}

module.exports = quickSort