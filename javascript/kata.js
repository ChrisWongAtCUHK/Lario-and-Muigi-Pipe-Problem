function pipeFix(numbers){
	let first = numbers[0];
	let last = numbers[numbers.length - 1];
	let result = [];

	for(let i = first; i <= last; i++) {
		result.push(i);
	}

	return result;
}
