/**
 * @name This program check the number is integer or float
 * @param {number} number
 * @returns {string}
 *
 * @example
 * ```js
 * const _int   = CheckIntegerOrFloat(2) // Integer 
 * const _float = CheckIntegerOrFloat(3.21) // Float
 * ```
 *
 * @author Tanishq Singh
 */
function CheckIntegerOrFloat(number) {
	return number % 1 === 0 ? "Integer" : "Float";
}

// Console Tests
console.log(CheckIntegerOrFloat(2) + " // Integer");
console.log(CheckIntegerOrFloat(5.3) + " // Float");
