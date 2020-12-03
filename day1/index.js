const fs = require('fs');

const processEntries = () => (
	fs
	.readFileSync('day1/input.txt', {encoding: 'utf-8'})
	.split('\n')
	.filter(entry => entry)
	.map(entry => parseInt(entry))
);

const calcResult = (entries, entry) => {
	const index = entries.indexOf(2020 - entry);

	return entry * entries[index];
}

const fixExpenseReport = entries => {
	let result = -1;
	
	for(let entry of entries) {
		if(entries.indexOf(2020 - entry) > -1) {
				result = calcResult(entries, entry);
				break;
		}
	};

	return result;
}

const entries = processEntries();

console.log(fixExpenseReport(entries));

module.exports = { fixExpenseReport };
