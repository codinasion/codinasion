import { LinearSearch } from "./linear-search";

describe("LinearSearch", () => {
  it("should return the index of the first occurrence of the value in the array", () => {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const val = 4;
    const index = LinearSearch(arr, val);
    expect(index).toBe(2);
  });

  it("should return -1 if the value is not found in the array", () => {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const val = 42;
    const index = LinearSearch(arr, val);
    expect(index).toBe(-1);
  });

  it("should return -1 when given an empty array", () => {
    const arr: number[] = [];
    const val = 42;
    const index = LinearSearch(arr, val);
    expect(index).toBe(-1);
  });
});
