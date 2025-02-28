import { heapSort } from "../../../src";

describe("heapSort", () => {
  it("should sort an array of numbers in ascending order", () => {
    const arr = [4, 10, 3, 5, 1];
    const sortedArr = heapSort(arr);
    expect(sortedArr).toEqual([1, 3, 4, 5, 10]);
  });

  it("should handle an empty array", () => {
    const arr: number[] = [];
    const sortedArr = heapSort(arr);
    expect(sortedArr).toEqual([]);
  });

  it("should handle an array with one element", () => {
    const arr = [1];
    const sortedArr = heapSort(arr);
    expect(sortedArr).toEqual([1]);
  });

  it("should handle an array with duplicate elements", () => {
    const arr = [4, 10, 4, 5, 1];
    const sortedArr = heapSort(arr);
    expect(sortedArr).toEqual([1, 4, 4, 5, 10]);
  });

  it("should handle an already sorted array", () => {
    const arr = [1, 2, 3, 4, 5];
    const sortedArr = heapSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an array sorted in descending order", () => {
    const arr = [5, 4, 3, 2, 1];
    const sortedArr = heapSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
  });
});
