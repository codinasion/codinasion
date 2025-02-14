import { bubbleSort } from "../../../src/sorting/bubble-sort";

describe("bubbleSort", () => {
  test("should sort an array of numbers in ascending order", () => {
    const input = [5, 3, 8, 4, 2];
    const expectedOutput = [2, 3, 4, 5, 8];
    expect(bubbleSort(input)).toEqual(expectedOutput);
  });

  test("should handle an empty array", () => {
    const input: number[] = [];
    const expectedOutput: number[] = [];
    expect(bubbleSort(input)).toEqual(expectedOutput);
  });

  test("should handle an array with one element", () => {
    const input = [1];
    const expectedOutput = [1];
    expect(bubbleSort(input)).toEqual(expectedOutput);
  });

  test("should handle an array with all elements the same", () => {
    const input = [7, 7, 7, 7];
    const expectedOutput = [7, 7, 7, 7];
    expect(bubbleSort(input)).toEqual(expectedOutput);
  });

  test("should handle an already sorted array", () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = [1, 2, 3, 4, 5];
    expect(bubbleSort(input)).toEqual(expectedOutput);
  });

  test("should handle an array sorted in descending order", () => {
    const input = [5, 4, 3, 2, 1];
    const expectedOutput = [1, 2, 3, 4, 5];
    expect(bubbleSort(input)).toEqual(expectedOutput);
  });
});
