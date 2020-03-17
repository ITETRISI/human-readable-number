module.exports = function toReadable (number) {
	const ONE = {
		0: 'zero',
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
	};
	
	const FIRST_DOZEN = {
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		14: 'fourteen',
		15: 'fifteen',
		16: 'sixteen',
		17: 'seventeen',
		18: 'eighteen',
		19: 'nineteen',
	}
	
	const DOZENS = {
		0: ' ',
		2: 'twenty',
		3: 'thirty',
		4: 'forty',
		5: 'fifty',
		6: 'sixty',
		7: 'seventy',
		8: 'eighty',
		9: 'ninety',
	};
	let [one, dozens, hundreds] = [...number + ''].reverse()
	let result = [];
	hundreds ? result.push(`${ONE[hundreds]} hundred`) : result;
	if (dozens) {
		if (dozens == 1) {
			result.push(`${FIRST_DOZEN[dozens+one]}`)
			return result.join(' ').trim()
		} else {
			result.push(`${DOZENS[dozens]}`)
			ONE[0] = ''
		}
	}
	one ? result.push(`${ONE[one]}`) : result;
	console.log(result)
	return result.join(' ').replace('  ','').trim()
}
