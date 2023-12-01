/**
 * Sorts an array of numbers using the bubble sort algorithm.
 *
 * @param arr - The array of numbers to be sorted.
 * @returns The sorted array.
 */
export function BubbleSort(arr: number[]): number[] {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // @ts-expect-error - TS2532: Object is possibly 'undefined'.
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        // @ts-expect-error - TS2532: Object is possibly 'undefined'.
        arr[j] = arr[j + 1];
        // @ts-expect-error - TS2532: Object is possibly 'undefined'.
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
