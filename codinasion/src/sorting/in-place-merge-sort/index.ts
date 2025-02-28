function merge(arr: number[], start: number, mid: number, end: number): void {
  let start2 = mid + 1;

  // If the direct merge is already sorted
  if (
    arr[mid] !== undefined &&
    arr[start2] !== undefined &&
    (arr[mid] as number) <= (arr[start2] as number)
  ) {
    return;
  }

  // Two pointers to maintain start of both arrays to merge
  while (start <= mid && start2 <= end) {
    // If element 1 is in right place
    if (
      arr[start] !== undefined &&
      arr[start2] !== undefined &&
      arr[start]! <= arr[start2]!
    ) {
      start++;
    } else {
      const value = arr[start2];
      let index = start2;

      // Shift all the elements between element 1 and element 2, right by 1.
      while (index !== start) {
        arr[index] = arr[index - 1]!;
        index--;
      }
      if (value !== undefined) {
        arr[start] = value;
      }

      // Update all the pointers
      start++;
      mid++;
      start2++;
    }
  }
}

function mergeSort(arr: number[], l: number, r: number): void {
  if (l < r) {
    // Same as (l + r) / 2, but avoids overflow for large l and h
    const m = l + Math.floor((r - l) / 2);

    // Sort first and second halves
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);

    merge(arr, l, m, r);
  }
}

/**
 * Sorts an array of numbers in place using the merge sort algorithm.
 *
 * @param arr - The array of numbers to be sorted.
 */
export function inPlaceMergeSort(arr: number[]): void {
  mergeSort(arr, 0, arr.length - 1);
}
