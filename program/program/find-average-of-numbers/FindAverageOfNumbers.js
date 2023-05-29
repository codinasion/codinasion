/**
 *
 * @name This program find average of numbers given.
 * @param {number[]} nums Array of numbers
 * @returns {number}
 *
 * @example
 * ```js
 * const avg1 = FindAverageOfNumbers(2, 4, 6) // 4
 * const avg2 = FindAverageOfNumbers(1, 2, 3, 4, 5) // 3
 * ```
 */
function FindAverageOfNumbers(...nums) {
  let sum = 0;
  nums.map((val) => (sum += val));

  return sum / nums.length;
}

// Console Tests
console.log("Average of 2, 4, and 6.");
console.log("That is" + FindAverageOfNumbers(2, 4, 6) + "// 4");

console.log("Average of 1, 2, and 3.");
console.log("That is" + FindAverageOfNumbers(1, 2, 3) + "// 2");

console.log("Average of 12, and 43.");
console.log("That is" + FindAverageOfNumbers(12, 43) + "// 27.5");
