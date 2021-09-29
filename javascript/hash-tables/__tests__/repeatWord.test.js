'use strict'

const repeatedWord = require('../functions/repeated-word');

let uniqueString = 'Hello, i am unique';
let repeatString1 = 'This word repeats this';
let repeatString2 = 'this word repeats this';


describe('HASH TABLE', () => {


    it('should return true if there is a repeated word', () => {
        let repeat = repeatedWord(repeatString2)
        expect(repeat).toBe('this')
    })

    it('should return true if there is a repeated word, enev if the case id different', () => {
        let repeat = repeatedWord(repeatString1)
        expect(repeat).toBe('this')
    })

    it('shoule return false if there are no repeated words', () => {
        let repeat = repeatedWord(uniqueString)
        expect(repeat).toBe("No repeated words")

    })

})