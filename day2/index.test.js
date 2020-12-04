const { expect } = require('chai');
const { debugPasswordDatabase } = require('./index.js')

describe('day2 part 1', () => {
    it('returns number of correct passwords', () => {
        const passwords = [
            '1-3 a: abcde',
            '1-3 b: cdefg',
            '2-9 c: ccccccccc',
            '10-15 z: zzzzzzzzzzzz',
            '8-11 k: kxkkkkzpkkzkkm'
        ]

        expect(debugPasswordDatabase(passwords)).to.equal(4)
    })
})