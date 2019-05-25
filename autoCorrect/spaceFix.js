const words = require('../words');
let goodSpelled = []

function checkIfSpelledGood(input) {
	let array = input.split(' ');
	for (x in array) {
		for (i in words.words) {
			if (array[x] === words.words[i]) {
				goodSpelled.push(array[x])
			}
		}
	}
	compareArrays(array, goodSpelled)
	return compareArrays(array, goodSpelled);
}

function compareArrays(array, spellChecked) {
	let badSpelled = [];
	for (let x in array) {
		let breaker = 0;
		for (let i in spellChecked) {
			if (array[x] === spellChecked[i]) {
				break;
			} else {
				if (breaker >= spellChecked.length -1) {
					badSpelled.push(array[x])
				}
				breaker++ 
				
			}
		}
	}
	return badSpelled;
}


module.exports.checkIfSpelledGood = checkIfSpelledGood;