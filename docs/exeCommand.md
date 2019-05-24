# How to use `exeCommand()`
#### This function tells the bot to execute the command passed when called

###### Params
`exeCommand()` Takes in one value a string.

###### Returns 
`exeCommand()` Returns a string containing the response to the command


###### Examples:

```js
import bot from 'talk-back-bot';
// for a list of avaliable commands look at data.js
// The bot takes the command given and returns the response
bot.exeCommand('What Time is it?')
// -> bot returns the current time in this formatt hour:min  AM/PM

```