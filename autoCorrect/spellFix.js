const words = require('../words')

function findCanadates1(badSpelledWord) {
	let canadates = []
	for (let x in words.words) {
		if (words.words[x].length  <=  badSpelledWord.length + 2 && words.words[x].length >= badSpelledWord.length - 2) {
			canadates.push(words.words[x])
		}
		
	}
	return findCanadates2(canadates, badSpelledWord);
}

function findCanadates2(array, word) {
	
}








console.log(findCanadates1('Burger'))