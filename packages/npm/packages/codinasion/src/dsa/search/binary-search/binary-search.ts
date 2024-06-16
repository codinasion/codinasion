/**
 * Performs binary search on a sorted array to find the index of a given value.
 * @param arr - The sorted array to search in.
 * @param val - The value to search for.
 * @returns The index of the value in the array, or -1 if the value is not found.
 */
export function BinarySearch(arr: number[], val: number): number {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) {
      return mid;
      // @ts-expect-error - We know that arr[mid] is not undefined.
    } else if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
