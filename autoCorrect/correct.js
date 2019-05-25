const sort = require('./spaceFix');
const words = require('../words');
const Fuzzy = require('fuzzyset.js');
const a = Fuzzy(words.words, true, 2, 3)


function correct(input) {
	let bad = sort.checkIfSpelledGood(input)
	let result = input
	if (bad) {
		for (let x in bad) {
			result = result.replace(bad[x], () => {
				return a.get(bad[x], bad[x], .6)[0][1];
			})
		}
	}
	return result;
}

console.log(correct('hi my nam is chickin'))