/**
 *
 * @name This program find average of numbers given.
 * @param {number[]} nums Array of numbers
 * @returns {number}
 *
 * @example
 * ```js
 * const avg1: number = FindAverageOfNumbersTs(2, 4, 6) // 4
 * const avg2: number = FindAverageOfNumbersTs(1, 2, 3, 4, 5) // 3
 * ```
 */
function FindAverageOfNumbersTs(...nums: number[]): number {
  let sum = 0;
  nums.map((val) => (sum += val));

  return sum / nums.length;
}

// Console Tests
console.log("Average of 2, 4, and 6.");
console.log("That is" + FindAverageOfNumbersTs(2, 4, 6) + "// 4");

console.log("Average of 1, 2, and 3.");
console.log("That is" + FindAverageOfNumbersTs(1, 2, 3) + "// 2");

console.log("Average of 12, and 43.");
console.log("That is" + FindAverageOfNumbersTs(12, 43) + "// 27.5");
