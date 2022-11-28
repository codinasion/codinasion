/**
 *
 * @name This program convert minutes to hours 
 * @param {number} minutes 
 * @returns {number}
 *
 * @example
 * ```js
 * const hours1 = ConvertMinutesToHours(60) // 1
 * const hours2 = ConvertMinutesToHours(120) // 2
 * ```
 * 
 * @author Tanishq Singh
 */
function ConvertMinutesToHours(minutes: number): number {
	const minutesInHour = 60;

	return minutes / minutesInHour;
}

// Console Tests
console.log("Numer of hours in 180 minutes: ");
console.log("That is " + ConvertMinutesToHours(180) + " // 3");

console.log("Numer of hours in 360 minutes: ");
console.log("That is " + ConvertMinutesToHours(3024000) + " // 6");