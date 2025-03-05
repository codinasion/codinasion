import { mergeSort } from "../../../src";

describe("mergeSort", () => {
  it("should sort an array of numbers in ascending order", () => {
    const array = [5, 3, 8, 4, 2];
    const sortedArray = mergeSort(array);
    expect(sortedArray).toEqual([2, 3, 4, 5, 8]);
  });

  it("should handle an empty array", () => {
    const array: number[] = [];
    const sortedArray = mergeSort(array);
    expect(sortedArray).toEqual([]);
  });

  it("should handle an array with one element", () => {
    const array = [1];
    const sortedArray = mergeSort(array);
    expect(sortedArray).toEqual([1]);
  });

  it("should handle an array with duplicate elements", () => {
    const array = [4, 2, 4, 3, 2];
    const sortedArray = mergeSort(array);
    expect(sortedArray).toEqual([2, 2, 3, 4, 4]);
  });

  it("should handle an already sorted array", () => {
    const array = [1, 2, 3, 4, 5];
    const sortedArray = mergeSort(array);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an array sorted in descending order", () => {
    const array = [5, 4, 3, 2, 1];
    const sortedArray = mergeSort(array);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5]);
  });
});
