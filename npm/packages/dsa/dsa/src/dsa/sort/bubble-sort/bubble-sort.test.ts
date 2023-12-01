import { BubbleSort } from "./bubble-sort";

describe("BubbleSort", () => {
  it("should sort an array of numbers in ascending order", () => {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const sortedArr = BubbleSort(arr);
    expect(sortedArr).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
  });

  it("should return an empty array when given an empty array", () => {
    const arr: number[] = [];
    const sortedArr = BubbleSort(arr);
    expect(sortedArr).toEqual([]);
  });

  it("should return the same array when given an array with one element", () => {
    const arr = [42];
    const sortedArr = BubbleSort(arr);
    expect(sortedArr).toEqual([42]);
  });
});
