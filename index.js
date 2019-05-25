let data = require('./data')
const correct = require('./autoCorrect/correctRestrict')
function exeCommand(input) {
	//input = correct.correct(input)
	for (let x in data.commands) {
		for (let i in data.commands[x].q) {
			if (input === data.commands[x].q[i]) {
				return data.commands[x].a
			}
		}
	}
	return 'I am sorry, but I didn\'t quite get that.'
}


console.log(exeCommand('witt'))