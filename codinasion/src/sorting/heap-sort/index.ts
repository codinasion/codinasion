function heapify(arr: number[], length: number, i: number): void {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let largest = i;

  // @ts-expect-error - ignore
  if (left < length && arr[left] > arr[largest]) {
    largest = left;
  }

  // @ts-expect-error - ignore
  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    // @ts-expect-error - ignore
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, length, largest);
  }
}

/**
 * Sorts an array of numbers using the heap sort algorithm.
 *
 * @param arr - The array of numbers to be sorted.
 * @returns The sorted array.
 *
 * @example
 * ```typescript
 * const sortedArray = heapSort([4, 10, 3, 5, 1]);
 * console.log(sortedArray); // Output: [1, 3, 4, 5, 10]
 * ```
 */
export function heapSort(arr: number[]): number[] {
  const length = arr.length;

  for (let i = Math.floor(length / 2 - 1); i >= 0; i--) {
    heapify(arr, length, i);
  }
  for (let i = length - 1; i >= 0; i--) {
    // @ts-expect-error - ignore
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
  return arr;
}
