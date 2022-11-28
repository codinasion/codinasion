/**
 *
 * @name This program find average of digits numbers given.
 * @param {number} nums Array of numbers
 * @returns {number}
 *
 * @example
 * ```js
 * const avg1: number = FindAverageOfNumbersTs(123) // 2
 * const avg2: number = FindAverageOfNumbersTs(12345) // 3
 * ```
 */
 function findAverageOfDigitsNumberTs(num: number): number {
    let sum = 0;
    let digits = 0;
  
    if (num === 0) return 0;
  
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
      digits += 1;
    }
  
    return sum / digits;
  }
  
  // Console Tests
  console.log("Average digits of 123.");
  console.log("That is" + findAverageOfDigitsNumberTs(123) + "// 2");
  
  console.log("Average digits of 12345.");
  console.log("That is" + findAverageOfDigitsNumberTs(12345) + "// 3");
  
  console.log("Average digits of 0.");
  console.log("That is" + findAverageOfDigitsNumberTs(0) + "// 0");
  