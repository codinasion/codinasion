export function addMatrices(
  matrixA: (number | undefined)[][],
  matrixB: (number | undefined)[][],
): number[][] {
  // Check if matrices are not empty and have the same dimensions
  if (
    !matrixA.length ||
    !matrixB.length ||
    !matrixA[0]?.length ||
    !matrixB[0]?.length ||
    matrixA.length !== matrixB.length ||
    matrixA[0].length !== matrixB[0].length
  ) {
    throw new Error("Matrices must be non-empty and have the same dimensions");
  }

  // Initialize the result matrix
  const result: number[][] = [];

  for (let i = 0; i < matrixA.length; i++) {
    const row: number[] = [];
    for (let j = 0; j < (matrixA[i]?.length ?? 0); j++) {
      const valueA = matrixA[i]?.[j] ?? 0; // Treat undefined as 0
      const valueB = matrixB[i]?.[j] ?? 0; // Treat undefined as 0
      row.push(valueA + valueB);
    }
    result.push(row);
  }

  return result;
}
