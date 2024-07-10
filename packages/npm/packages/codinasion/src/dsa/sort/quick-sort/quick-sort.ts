/**
 * Sorts an array of numbers using the QuickSort algorithm.
 * @param arr - The array of numbers to be sorted.
 * @returns The sorted array.
 */
export function QuickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    // @ts-expect-error - TS2532: Object is possibly 'undefined'.
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // @ts-expect-error - TS2532: Object is possibly 'undefined'.
  return QuickSort(left).concat(pivot, QuickSort(right));
}
