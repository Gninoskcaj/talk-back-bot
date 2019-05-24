let d = new Date();

function getTheDate() {
	const result = `It is ${convertMilitary()}`
	return result
}


function convertMilitary() {
	// Dclare consts
	const military = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
	const time = [1, 2, 3, 4, 5, 6 ,7 , 8, 9, 10, 11,]

	// Declare vars

	let h = d.getHours()
	let m = d.getMinutes()
	let whatM = ''
	let hours = ''
	let min = m

	// Figure AM or PM
	if (h > 13) {
		whatM = 'PM'
	} else {
		whatM = 'AM'
	}
	if (whatM === 'PM') {
		hours = time[indexof(h)]
	} else {
		hours = h
	}
	return `${hours}:${min} ${whatM}`
}


module.exports.getTheDate = getTheDate;