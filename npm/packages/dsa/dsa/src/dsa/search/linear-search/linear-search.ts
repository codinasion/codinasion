/**
 * Performs a linear search on an array to find the index of a given value.
 * @param arr - The array to be searched.
 * @param val - The value to search for.
 * @returns The index of the value in the array, or -1 if the value is not found.
 */
export function LinearSearch(arr: number[], val: number): number {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
