let a = 'bad'

let b = 'bnd'

if (a !== b) {
	let obj = {}
	let AArray = a.split('')
	let BArray = b.split('')

	for (let x in AArray) {
		for (let i in BArray) {
			if (AArray[x] === BArray[i]) {
				console.log(b.match(a))
				BArray.splice(i, 1)
			}
		}
	}
	console.log(BArray)
	return BArray;
}