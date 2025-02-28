import { inPlaceMergeSort } from "../../../src";

describe("inPlaceMergeSort", () => {
  it("should sort an array of numbers in ascending order", () => {
    const arr = [5, 3, 8, 4, 2];
    inPlaceMergeSort(arr);
    expect(arr).toEqual([2, 3, 4, 5, 8]);
  });

  it("should handle an already sorted array", () => {
    const arr = [1, 2, 3, 4, 5];
    inPlaceMergeSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an array with duplicate values", () => {
    const arr = [4, 2, 2, 8, 3, 3, 1];
    inPlaceMergeSort(arr);
    expect(arr).toEqual([1, 2, 2, 3, 3, 4, 8]);
  });

  it("should handle an array with negative numbers", () => {
    const arr = [3, -2, -1, 5, 4];
    inPlaceMergeSort(arr);
    expect(arr).toEqual([-2, -1, 3, 4, 5]);
  });

  it("should handle an empty array", () => {
    const arr: number[] = [];
    inPlaceMergeSort(arr);
    expect(arr).toEqual([]);
  });

  it("should handle an array with one element", () => {
    const arr = [1];
    inPlaceMergeSort(arr);
    expect(arr).toEqual([1]);
  });
});
