/**
 * Sorts an array of numbers using the selection sort algorithm.
 *
 * @param arr - The array of numbers to be sorted.
 * @returns The sorted array.
 */
export function SelectionSort(arr: number[]): number[] {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      // @ts-expect-error - TS2532: Object is possibly 'undefined'.
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = arr[i];
      // @ts-expect-error - TS2532: Object is possibly 'undefined'.
      arr[i] = arr[minIndex];
      // @ts-expect-error - TS2532: Object is possibly 'undefined'.
      arr[minIndex] = temp;
    }
  }
  return arr;
}
