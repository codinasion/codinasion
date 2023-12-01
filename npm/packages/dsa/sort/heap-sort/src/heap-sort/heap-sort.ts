/**
 * Sorts an array of numbers using the Heap Sort algorithm.
 *
 * @param arr - The array of numbers to be sorted.
 * @returns The sorted array.
 */
export function HeapSort(arr: number[]): number[] {
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
  for (let i = n - 1; i >= 0; i--) {
    // @ts-expect-error - TS2532: Object is possibly 'undefined'.
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
  return arr;
}

function heapify(arr: number[], n: number, i: number): void {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  // @ts-expect-error - TS2532: Object is possibly 'undefined'.
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  // @ts-expect-error - TS2532: Object is possibly 'undefined'.
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== i) {
    // @ts-expect-error - TS2532: Object is possibly 'undefined'.
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}
