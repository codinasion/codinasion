import { BinarySearch } from "./binary-search";

describe("BinarySearch", () => {
  it("should return the index of the first occurrence of the value in the array", () => {
    const arr = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9];
    const val = 4;
    const index = BinarySearch(arr, val);
    expect(index).toBe(5);
  });

  it("should return -1 if the value is not found in the array", () => {
    const arr = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9];
    const val = 42;
    const index = BinarySearch(arr, val);
    expect(index).toBe(-1);
  });

  it("should return -1 when given an empty array", () => {
    const arr: number[] = [];
    const val = 42;
    const index = BinarySearch(arr, val);
    expect(index).toBe(-1);
  });
});
