function trace(matrix: number[][]): number {
  let trace = 0;
  for (let i = 0; i < matrix.length; i++) {
    trace += matrix[i][i];
  }
  return trace;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(trace(matrix)); // Output: 15
