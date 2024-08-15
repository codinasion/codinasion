import { addMatrices } from "./add-matrices";

describe("addMatrices", () => {
  test("should add two matrices of the same dimensions", () => {
    const matrixA = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const matrixB = [
      [9, 8, 7],
      [6, 5, 4],
      [3, 2, 1],
    ];
    const expected = [
      [10, 10, 10],
      [10, 10, 10],
      [10, 10, 10],
    ];
    expect(addMatrices(matrixA, matrixB)).toEqual(expected);
  });

  test("should throw an error for empty matrices", () => {
    const matrixA: number[][] = [];
    const matrixB: number[][] = [];
    expect(() => addMatrices(matrixA, matrixB)).toThrow(
      "Matrices must be non-empty and have the same dimensions",
    );
  });

  test("should throw an error for matrices with different dimensions", () => {
    const matrixA = [
      [1, 2],
      [3, 4],
    ];
    const matrixB = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    expect(() => addMatrices(matrixA, matrixB)).toThrow(
      "Matrices must be non-empty and have the same dimensions",
    );
  });

  test("should handle matrices with undefined values gracefully", () => {
    const matrixA = [
      [1, undefined, 3],
      [undefined, 5, 6],
    ];
    const matrixB = [
      [undefined, 8, 7],
      [6, undefined, 4],
    ];
    const expected = [
      [1, 8, 10],
      [6, 5, 10],
    ];
    expect(addMatrices(matrixA, matrixB)).toEqual(expected);
  });
});
