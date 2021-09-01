'use strict';

const Stack = require('./stack.js')

function validateBrackets(input) {
    let front = 0
    let parenthA = new Stack();
    let parenthB = new Stack();
    let bracketA = new Stack();
    let bracketB = new Stack();
    let blockA = new Stack();
    let blockB = new Stack();
    while (front < input.length) {
        if (input[front] === '(') { parenthA.push(input[front]) }
        if (input[front] === ')') { parenthB.push(input[front]) }
        if (input[front] === '{') { bracketA.push(input[front]) }
        if (input[front] === '}') { bracketB.push(input[front]) }
        if (input[front] === '[') { blockA.push(input[front]) }
        if (input[front] === ']') { blockB.push(input[front]) }
        front++
    }
    // console.log(parenthA, parenthB, blockA, blockB, bracketA, bracketB)
    if (parenthA.length === parenthB.length && bracketA.length === bracketB.length && blockA.length === blockB.length) { return true }
    return false
}

module.exports = validateBrackets;