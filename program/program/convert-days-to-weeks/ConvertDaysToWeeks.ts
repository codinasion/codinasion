/**
 *
 * @name This program convert days to week 
 * @param {number} days 
 * @returns {number}
 *
 * @example
 * ```ts
 * const weeks1 = ConvertDaysToWeeks(35) // 7
 * const weeks2 = ConvertDaysToWeeks(7) // 1
 * ```
 * 
 * @author Tanishq Singh
 */
const ConvertDaysToWeeks = (days: number): number => days / 7;

// Console Tests
console.log("Number of weeks in 14 days: ");
console.log("That is " + ConvertDaysToWeeks(14) + " // 2");

console.log("Numer of weeks in 28 days: ");
console.log("That is " + ConvertDaysToWeeks(28) + " // 4");
