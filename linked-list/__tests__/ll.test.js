'use strict';

const LL = require('../lib/ll.js');
const zip = require('../lib/zip.js')

describe('Linked List Class', () => {


    it('should be able to create an empty linked list', () => {
        let ll = new LL();
        expect(ll.head).toBe(null);
    })

    it('should be able to insert a node into the linked list at the end', () => {
        let ll = new LL();
        ll.append(1);
        ll.append(2)
        expect(ll.head.value).toBe(1)
        expect(ll.head.next.value).toBe(2)
        expect(ll.head.next.next).toBe(null)
    })

    it('should have a head property that points to first node', () => {
        let ll = new LL();
        ll.append(1);
        let head = { head: { value: 1, next: null } }
        expect(ll).toEqual(head);
        expect(ll.head).not.toEqual(head)
    })

    it('should be able to insert before a specific node', () => {
        let ll = new LL();
        ll.append(1);
        ll.append(2);
        ll.insertAfter(1, 5);
        ll.insertAfter(2, 4);
        expect(ll.head.next.value).toEqual(5);
        expect(ll.head.next.next.value).toEqual(2)
        expect(ll.head.next.next.next.value).toEqual(4)
        expect(ll.head.next.next.next.next).toEqual(null)

    })

    it('should be able to insert after a specific node', () => {
        let ll = new LL();
        ll.append(1);
        ll.append(2);
        ll.insertBefore(1, 5);
        ll.insertBefore(2, 4);
        expect(ll.toString()).toEqual('{ 5 } -> { 1 } -> { 4 } -> { 2 } -> NULL');

    })

    it('should be able to insert after the last node', () => {
        let ll = new LL();
        ll.append(1);
        ll.append(2);
        ll.insertAfter(2, 5);
        expect(ll.toString()).toEqual('{ 1 } -> { 2 } -> { 5 } -> NULL');

    })

    it('should be able to insert before the fist node', () => {
        let ll = new LL();
        ll.append(1);
        ll.append(2);
        ll.insertBefore(1, 5);
        expect(ll.toString()).toEqual('{ 5 } -> { 1 } -> { 2 } -> NULL');
    })

    it('should be return true when finding a value that exists in the linked list', () => {
        let ll = new LL();
        ll.append(1);
        let search = ll.includes(1);
        console.log(ll);
        console.log(search);
        expect(ll.includes(1)).toBe(true);
    })

    it('should return false when finding a value that is not in the linked list', () => {
        let ll = new LL();
        ll.append(1);
        expect(ll.includes(2)).toBe(false);
    })

    it('should return a collection of all the values in the linked list', () => {
        let ll = new LL();
        ll.append(1);
        ll.append(2);
        ll.append(3);
        expect(ll.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> NULL')
    })

    xit('should be able to delete a specific node', () => {
        let ll = new LL();
        ll.append(1);
        ll.append(2);
        ll.delete(2);
        expect(ll.toString()).toEqual('{ 1 } -> NULL');
    })
})

describe('LINKED-LIST KTH METHODS', () => {

    it('should respond with error messege if K is greater than the length of the LL', () => {
        let ll = new LL();
        ll.append(1);
        expect(ll.nthFromEnd(0)).toBe(1);
        expect(ll.nthFromEnd(2)).toBe('Error, searched outside LL. LL length is only 1');
    })

    it('should respond with error messege if K is equal to the length of the LL', () => {
        let ll = new LL();
        ll.append(1);
        expect(ll.nthFromEnd(0)).toBe(1);
        expect(ll.nthFromEnd(1)).toBe('Error, search uses array index type notation. Search is outside LL. LL length is 1')
    })

    it('should respond error if K is negative', () => {
        let ll = new LL();
        ll.append(1);
        ll.append(2);
        expect(ll.nthFromEnd(-1)).toBe('Error, must search a positive integer')
    })

    it('should respond with the expected value for any k that is inside the LL', () => {
        let ll = new LL();
        ll.append(1);
        ll.append(2);
        ll.append(3);
        ll.append(4);
        expect(ll.nthFromEnd(0)).toBe(4);
        expect(ll.nthFromEnd(1)).toBe(3);
        expect(ll.nthFromEnd(2)).toBe(2);
        expect(ll.nthFromEnd(3)).toBe(1);
    })
})

describe('LINKED-LIST-ZIP', () => {

    it('should return one ll when given two ll', () => {
        let ll = new LL()
        let ll2 = new LL();
        ll.append(1);
        ll.append(2);
        ll.append(3);
        ll2.append('a');
        ll2.append('b');
        ll2.append('c');
        zip(ll, ll2);
        expect(ll.toString()).toBe('{ 1 } -> { a } -> { 2 } -> { b } -> { 3 } -> { c } -> NULL')

    })

    it('should still return the zippered list even if one ll is longer than the other', () => {
        let ll = new LL()
        let ll2 = new LL();
        ll.append(1);
        ll.append(2);
        ll2.append('a');
        ll2.append('b');
        ll2.append('c');
        zip(ll, ll2);
        expect(ll.toString()).toBe('{ 1 } -> { a } -> { 2 } -> { b } -> { c } -> NULL')
    })


})
