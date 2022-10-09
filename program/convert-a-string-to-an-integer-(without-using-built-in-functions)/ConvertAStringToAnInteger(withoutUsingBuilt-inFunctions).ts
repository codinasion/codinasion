// without using built-in functions

// Language: typescript
// Path: ConvertAStringToAnInteger(withoutUsingBuilt-inFunctions).ts
// without using built-in functions


/**
 * This function converts a string to an integer without using built-in functions with respect to the negative sign and the decimal point
 * @param {string} str - The string to be converted
 * @returns {number} - The converted integer
 * @example
 * convertStringToInteger("123") // returns 123
 * convertStringToInteger("123.45") // returns 123
 * 
 * 
 * @author [Ahmed Eltaher](https://github.com/ahmedheltaher)
 * 
 */
function convertStringToInteger(str: string): number {
	let isNegative = false;
	if (str[0] === "-") {
		isNegative = true;
		str = str.slice(1);
	}
	if (str.indexOf(".") !== -1) {
		str = str.slice(0, str.indexOf("."));
	}

	// Convert the string to an integer
	let num = 0;
	for (let i = 0; i < str.length; i++) {
		num += (str.charCodeAt(i) - 48) * Math.pow(10, str.length - i - 1);
	}

	// Handle negative numbers
	return num * (isNegative ? -1 : 1);
}
