/**
 *
 * @name This program convert seconds to weeks 
 * @param {number} seconds 
 * @returns {number}
 *
 * @example
 * ```js
 * const week1 = ConvertSecondsToWeeks(604800) // 1
 * const week2 = ConvertSecondsToWeeks(1209600) // 2
 * ```
 */
function ConvertSecondsToWeeks(seconds: number): number {
	const secondsInWeek = 60 * 60  * 24 * 7;
	return seconds / secondsInWeek;
}

// Console Tests
console.log("Numer of weeks in 604800 seconds: ");
console.log("That is " + ConvertSecondsToWeeks(604800) + " // 1");

console.log("Numer of weeks in 3024000 seconds: ");
console.log("That is " + ConvertSecondsToWeeks(3024000) + " // 5");
