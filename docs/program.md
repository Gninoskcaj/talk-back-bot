# How to use Program the bot

###### Programing the bot is done in data.js

In your project go to `node_modules` > `talk-back-bot` > `data.js` open the file.

This is what it should look like:

```js

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
				"Whats the time",
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

```

`"q"` stands for question `"a"` stand for answer.

`"commands"` is an array of objects. each object being a command.

Now just edit the file to change or add more commands.