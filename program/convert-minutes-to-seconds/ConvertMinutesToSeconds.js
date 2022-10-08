/**
 *
 * @name This program converts minutes into seconds
 * @param {number} minutes
 * @returns {number} seconds
 *
 * @example
 * ```js
 * const area1 = ConvertMinutesToSeconds(5) // 300
 * const area2 = ConvertMinutesToSeconds(1) // 60
 * ```
 */
function ConvertMinutesToSeconds(minutes) {
  return minutes * 60;
}

// Console Tests
console.log("Number of seconds in 5 minutes.");
console.log("That is" + ConvertMinutesToSeconds(5) + "// 300");

console.log("Number of seconds in 15 minutes.");
console.log("That is" + ConvertMinutesToSeconds(15) + "// 900");

console.log("Number of seconds in 2.5 minutes.");
console.log("That is" + ConvertMinutesToSeconds(2.5) + "// 150");
