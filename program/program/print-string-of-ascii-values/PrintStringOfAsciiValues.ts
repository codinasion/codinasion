/**
 *
 * @name This program prints string of ascii values.
 * @param {number[]} codes Array of numbers
 * @returns {string}
 *
 * @example
 * ```js
 * const str1: string = printStringOfAsciiValues(65, 66, 67) // ABC
 * const str2: string = printStringOfAsciiValues(72, 69, 76, 76, 79) // HELLO
 * ```
 */
function printStringOfAsciiValues(...codes: number[]): string {
  return String.fromCharCode(...codes);
}

// Console Tests
console.log("String values of 75, 75, 82, 72");
console.log(printStringOfAsciiValues(75, 75, 82, 72) + "// KKRH");

console.log("String values of 72, 69, 76, 76, 79");
console.log(printStringOfAsciiValues(72, 69, 76, 76, 79) + "// HELLO");
