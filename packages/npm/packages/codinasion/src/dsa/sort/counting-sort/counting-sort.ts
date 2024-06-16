/**
 * Sorts an array of numbers using the Counting Sort algorithm.
 *
 * @param arr - The array of numbers to be sorted.
 * @returns The sorted array.
 */
export function CountingSort(arr: number[]): number[] {
  const n = arr.length;
  if (n <= 1) {
    return arr;
  }
  const max = Math.max(...arr);
  const count = new Array(max + 1).fill(0);
  for (let i = 0; i < n; i++) {
    // @ts-expect-error - TS2532: Object is possibly 'undefined'.
    count[arr[i]]++;
  }
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }
  const output = new Array(n);
  for (let i = n - 1; i >= 0; i--) {
    // @ts-expect-error - TS2532: Object is possibly 'undefined'.
    output[count[arr[i]] - 1] = arr[i];
    // @ts-expect-error - TS2532: Object is possibly 'undefined'.
    count[arr[i]]--;
  }
  return output as number[];
}
