let datajs = require('./src/UserFunctions/date');
 
let data = JSON.parse(`{

	"name": "Roby",
	"gender": "Male",
	"language": "English",
	"commands": [
		{
			"q": [
				"hey what is the time?",
				"time?",
				"whats the time",
				"what is the time?",
				"witt",
				"what time is it?",
				"what time is it"

			],
			"a": "${datajs.getTheDate()}"
		},
		{
			"q": [
				"What is your name?",
				"what is your name"
			],
			"a": "My name is Roby"
		}
	]
}`)

module.exports = data;