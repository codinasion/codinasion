/**
 *
 * @name This program convert kilometrs to miles 
 * @param {number} kilometers 
 * @returns {number}
 *
 * @example
 * ```ts
 * const mile1 = ConvertKilometersToMiles(8.04672) // 5
 * const mile2 = ConvertKilometersToMiles(16.08) // 10
 * ```
 * 
 * @author Tanishq Singh
 */
const ConvertKilometersToMiles = (kilometers: number): number => kilometers * 0.621371;

// Console Tests
console.log("Number of miles in 1.6 kilometers: ");
console.log("That is " + ConvertKilometersToMiles(1.6) + " // 0.9941936");

console.log("Numer of miles in 3.2 kilometers: ");
console.log("That is " + ConvertKilometersToMiles(3.2) + " // 1.9883872");
