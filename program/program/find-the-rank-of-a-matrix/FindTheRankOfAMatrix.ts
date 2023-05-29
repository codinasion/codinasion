function matrixRank(matrix: number[][]): number {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    let rank = Math.min(numRows, numCols);
  
    for (let row = 0; row < rank; row++) {
      if (matrix[row][row] !== 0) {
        for (let col = 0; col < numRows; col++) {
          if (col !== row) {
            const multiplier = matrix[col][row] / matrix[row][row];
            for (let i = row; i < numCols; i++) {
              matrix[col][i] -= multiplier * matrix[row][i];
            }
          }
        }
      } else {
        let reduce = true;
        for (let i = row + 1; i < numRows; i++) {
          if (matrix[i][row] !== 0) {
            [matrix[row], matrix[i]] = [matrix[i], matrix[row]];
            reduce = false;
            break;
          }
        }
        if (reduce) {
          rank--;
          for (let i = 0; i < numRows; i++) {
            matrix[i][row] = matrix[i][rank];
          }
        }
        row--;
      }
    }
  
    return rank;
  }
  
  // Example usage
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  console.log(matrixRank(matrix)); // Output: 2
  