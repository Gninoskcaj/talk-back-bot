const time = require('./date')

const current = (val) => {
	if (val === 'time') {
		return time.getTheDate();
	}
}

module.exports.current = current;