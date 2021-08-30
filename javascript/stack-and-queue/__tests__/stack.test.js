'use strict';

const Stack = require('../lib/stack.js')

describe('STACK', () => {

    it('should can create an empty stack', () => {
        let stack = new Stack();
        expect(stack.length).toBe(0)
        expect(stack.top).toBe(null)
    })

    it('should be able to push, adding a new value to the stack', () => {
        let stack = new Stack();
        stack.push(1);
        expect(stack.length).toBe(1)
        expect(stack.top).toBe(0)
        expect(stack[0].value).toBe(1)
    })

    it('should be able to add multiple values to the same stack', () => {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.length).toBe(3)
        expect(stack.top).toBe(2)
        expect(stack[0].value).toBe(1)
        expect(stack[1].value).toBe(2)
        expect(stack[2].value).toBe(3)
    })

    it('should be able to pop off the top value from the stack', () => {
        let stack = new Stack();
        stack.push(1);
        stack.push(2)
        let popped = stack.pop();
        expect(popped.value).toBe(2)
        expect(stack.top).toBe(0)
        expect(stack[0].value).toBe(1)
        expect(stack.length).toEqual(1)
    })

    it('should be able to empty a stack, returning empty and having a top of null', () => {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.pop();
        let notEmpty = stack.isEmpty();
        stack.pop();
        let emptied = stack.isEmpty();
        expect(stack.length).toBe(0)
        expect(stack.top).toBe(null)
        expect(notEmpty).toBe(false)
        expect(emptied).toBe(true)
    })

    it('should be able to peek at the top of the stack', () => {
        let stack = new Stack();
        stack.push(1);
        let peeked = stack.peek();
        expect(peeked.value).toBe(1)
    })

    it('should throw an error on pop or peek if the stack is empty', () => {
        let stack = new Stack();
        let peeked = stack.peek();
        let popped = stack.pop();
        expect(peeked).toBe('Stack is empty')
        expect(popped).toBe('Stack is empty')
    })

})