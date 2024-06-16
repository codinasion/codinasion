/**
 * Sorts an array of numbers using the merge sort algorithm.
 *
 * @param arr - The array of numbers to be sorted.
 * @returns The sorted array.
 */
export function MergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = MergeSort(arr.slice(0, mid));
  const right = MergeSort(arr.slice(mid));
  return Merge(left, right);
}

function Merge(left: number[], right: number[]): number[] {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    // @ts-expect-error - TS2532: Object is possibly 'undefined'.
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  // @ts-expect-error - TS2532: Object is possibly 'undefined'.
  return result.concat(left.slice(i)).concat(right.slice(j));
}
