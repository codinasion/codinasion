/**
 * Sorts an array of numbers using the bubble sort algorithm.
 *
 * @param arr - The array of numbers to be sorted. If the array is undefined, an empty array is returned.
 * @returns The sorted array of numbers.
 *
 * @example
 * ```typescript
 * const sortedArray = bubbleSort([5, 3, 8, 4, 2]);
 * console.log(sortedArray); // Output: [2, 3, 4, 5, 8]
 * ```
 */
export function bubbleSort(arr: number[] | undefined): number[] {
  if (!arr) {
    return [];
  }
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j]! > arr[j + 1]!) {
        // Swap arr[j] and arr[j + 1]
        const temp = arr[j]!;
        arr[j] = arr[j + 1]!;
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
