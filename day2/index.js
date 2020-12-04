const fs = require('fs')

const passwords = fs
	.readFileSync('day2/input.txt', { encoding: 'utf-8' })
	.split('\n')
	.filter(password => password)

const calcOccurances = (password, char) => (
	password.split('').reduce((occurances, letter) => (
		letter === char ? occurances + letter : occurances
	), '').length
)

const debugPasswordDatabase = passwordsAndCriteria => {
	let correctPasswords = []

	passwordsAndCriteria.forEach(item => {
		const minOccurance = parseInt(item.slice(0, item.indexOf('-')))
		const maxOccurance = parseInt(item.slice(item.indexOf('-') + 1, item.indexOf(' ')))
		const char = item.slice(item.indexOf(':') - 1, item.indexOf(':'))
		const password = item.slice(item.indexOf(':') + 2)

		const actualOccurances = calcOccurances(password, char)

		if (actualOccurances <= maxOccurance && actualOccurances >= minOccurance) {
			correctPasswords.push(password)
		}

	})

	return correctPasswords.length
}

console.log(debugPasswordDatabase(passwords))

module.exports = { debugPasswordDatabase }
