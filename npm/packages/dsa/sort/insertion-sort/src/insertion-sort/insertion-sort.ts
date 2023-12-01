/**
 * Sorts an array of numbers using the insertion sort algorithm.
 *
 * @param arr - The array of numbers to be sorted.
 * @returns The sorted array.
 */
export function InsertionSort(arr: number[]): number[] {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;
    // @ts-expect-error - TS2532: Object is possibly 'undefined'.
    while (j >= 0 && arr[j] > key) {
      // @ts-expect-error - TS2532: Object is possibly 'undefined'.
      arr[j + 1] = arr[j];
      j--;
    }
    // @ts-expect-error - TS2532: Object is possibly 'undefined'.
    arr[j + 1] = key;
  }
  return arr;
}
