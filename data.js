 let datajs = require('./src/UserFunctions/date');
 
 var data = JSON.parse(`{

	"name": "",
	"gender": "",
	"language": "English",
	"commands": [
		{
			"q": [
				"hey what is the time?",
				"time?",
				"whats the time",
				"what is the time?",
				"witt"

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