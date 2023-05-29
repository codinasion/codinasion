/**
 *
 * @name This program convert hours to minutes
 * @param {number} hours
 * @returns {number}
 *
 * @example
 * ```ts
 * const minutes1: number = ConvertHoursToMinutes(3) // 180
 * const minutes2: number = ConvertHoursToMinutes(1.5) // 90
 * ```
 * 
 * @author Tanishq Singh
 */
function ConvertHoursToMinutes(hours: number): number {
	const minutesInHour = 60;

	return hours * minutesInHour;
}

// Console Tests
console.log("Numer of minutes in 1 hours: ");
console.log("That is " + ConvertHoursToMinutes(1) + " // 60");

console.log("Numer of minutes in 2 hours: ");
console.log("That is " + ConvertHoursToMinutes(2) + " // 120");