/**
 * Sorts an array of numbers using the Radix Sort algorithm.
 *
 * @param arr - The array of numbers to be sorted.
 * @returns The sorted array.
 */
export function RadixSort(arr: number[]): number[] {
  const max = Math.max(...arr);
  let exp = 1;
  let sortedArr = [...arr];
  while (Math.floor(max / exp) > 0) {
    sortedArr = CountingSortByDigit(sortedArr, exp);
    exp *= 10;
  }
  return sortedArr;
}

function CountingSortByDigit(arr: number[], exp: number): number[] {
  const n = arr.length;
  const count = new Array(10).fill(0);
  for (let i = 0; i < n; i++) {
    // @ts-expect-error - TS2532: Object is possibly 'undefined'.
    const digit = Math.floor(arr[i] / exp) % 10;
    count[digit]++;
  }
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }
  const output = new Array(n);
  for (let i = n - 1; i >= 0; i--) {
    // @ts-expect-error - TS2532: Object is possibly 'undefined'.
    const digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }
  return output as number[];
}
