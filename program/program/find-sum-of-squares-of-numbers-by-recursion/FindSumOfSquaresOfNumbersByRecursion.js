function FindSumOfSquaresOfNumbersByRecursion(number) {
	if (number.split(' ').length <= 1) {
		return Number(number.split(' ',1)) ** 2;
	}
	return (Number(number.split(' ',1)) ** 2) + FindSumOfSquaresOfNumbersByRecursion(number.substring(number.indexOf(' ')+1, number.length));
}

let number = "1 2 3 4 5";
console.log('Input  :', number);
console.log('Output :', FindSumOfSquaresOfNumbersByRecursion(number));
