const fs = require('fs');

const processEntries = () => (
	fs
	.readFileSync('day1/input.txt', {encoding: 'utf-8'})
	.split('\n')
	.filter(entry => entry)
	.map(entry => parseInt(entry))
);

const calcResult = (entries, x, y) => {
	const index = entries.indexOf(2020 - x - y);

	return x * y * entries[index];
}

const fixExpenseReport = entries => {
	let result = -1;
	
	for(let x of entries) {
		for(let y of entries) {
			if (entries.indexOf(2020 - x - y) > -1) {
				result = calcResult(entries, x, y);
				break
			}
		}

		if (result > -1) { break };
	};

	return result;
}

const entries = processEntries();

console.log(fixExpenseReport(entries));

module.exports = { fixExpenseReport };
