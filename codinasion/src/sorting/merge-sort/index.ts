function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (
      left[leftIndex] !== undefined &&
      right[rightIndex] !== undefined &&
      (left[leftIndex] as number) < (right[rightIndex] as number)
    ) {
      result.push(left[leftIndex]!);
      leftIndex++;
    } else {
      result.push(right[rightIndex]!);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

/**
 * Sorts an array of numbers using the merge sort algorithm.
 *
 * @param array - The array of numbers to be sorted.
 * @returns A new array containing the sorted numbers.
 */
export function mergeSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}
