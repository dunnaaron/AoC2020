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
		const firstOccurance = parseInt(item.slice(0, item.indexOf('-')))
		const lastOccurance = parseInt(item.slice(item.indexOf('-') + 1, item.indexOf(' ')))
		const char = item.slice(item.indexOf(':') - 1, item.indexOf(':'))
		const password = item.slice(item.indexOf(':') + 2)

		const firstMatch = password[firstOccurance - 1] === char
		const secondMatch = password[lastOccurance - 1] === char

		const actualOccurances =  (firstMatch || secondMatch) && (firstMatch !== secondMatch)

		if (actualOccurances) {
			correctPasswords.push(password)
		}

	})

	return correctPasswords.length
}

console.log(debugPasswordDatabase(passwords))

module.exports = { debugPasswordDatabase }
