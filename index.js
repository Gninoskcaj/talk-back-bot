let data = require('./config')
const correct = require('./autoCorrect/correct')
function exeCommand(input) {
	input = correct.correct(input)
	for (let x in data.commands) {
		for (let i in data.commands[x].q) {
			if (input === data.commands[x].q[i]) {
				return data.commands[x].a
			}
		}
	}
	return 'I am sorry, but I didn\'t quite get that.'
}
const q = prompt('What is your question?')

console.log(exeCommand(q))