'use strict';

const validate = require('../lib/validateBrackets.js')

describe('VALIDATOR', () => {

    it('should be able to correctly validate a string for brackets', () => {
        let valid = validate('()(test)test')
        let invlaid = validate('()((()test')
        expect(valid).toBe(true)
        expect(invlaid).toBe(false)
    })

    it('should still work as expected when there are brackets at the end of the string', () => {
        let valid = validate('()(test)test()')
        let invlaid = validate('()((()test()')
        expect(valid).toBe(true)
        expect(invlaid).toBe(false)
    })

    it('should be able to recognize all kinds of brackets', () => {
        let valid = validate('(){}[]')
        let invlaid = validate('([{')
        expect(valid).toBe(true)
        expect(invlaid).toBe(false)
    })
})