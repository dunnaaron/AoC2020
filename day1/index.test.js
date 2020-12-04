const { expect } = require('chai');
const { fixExpenseReport } = require('./index.js')
// PART 1
// describe('day1', () => {
//     it('returns the product of two numbers that sum to 2020 in an array', () => {
//         const entries = [
//             2020,
//             2018,
//             2,
//             42
//         ];

//         expect(fixExpenseReport(entries)).to.equal(4036);
//     });

//     it('returns -1 if there is not a solution', () => {
//         const entries = [
//             2020,
//             2018,
//             42
//         ];

//         expect(fixExpenseReport(entries)).to.equal(-1);
//     });
// });

describe('day1 part 2', () => {
    it('returns the product of 3 numbers that sum to 2020 in an array', () => {
        const entries = [
            2020,
            979,
            6,
            366,
            52,
            675,
            3
        ]

        expect(fixExpenseReport(entries)).to.equal(241861950)
    })
})