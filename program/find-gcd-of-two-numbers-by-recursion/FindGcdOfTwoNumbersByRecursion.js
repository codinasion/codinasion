function greatestCommonDenominator(a, b) {
	// the bigger number is always divided by the smaller one
	if (b === 0) return a;

	// recursively call the function
	return greatestCommonDenominator(b, a % b);
}

//display greatest common denominator of 12 and 18
console.log(greatestCommonDenominator(12, 18));
