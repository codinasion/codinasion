function FindLargestNumberInAnArray(array: Array<number>): number | string {
  let max = 0;
  for (const num of array) {
    max = Math.max(max, num);
  }

  return max;
}

const array = [1, 2, 3, 4, 5];
console.log(`Input: [${array}]`);
const result = FindLargestNumberInAnArray(array);
console.log(`Output: ${result}`);
