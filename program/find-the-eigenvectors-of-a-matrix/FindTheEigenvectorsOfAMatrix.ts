function eigenvectors(matrix: number[][]) {
    const n = matrix.length;
    const eigenvalues = calculateEigenvalues(matrix);
  
    const eigenvectors = [];
    for (let i = 0; i < n; i++) {
      const lambda = eigenvalues[i];
      const aMinusLambdaI = subtractScalar(matrix, lambda);
      const nullspace = calculateNullspace(aMinusLambdaI);
      eigenvectors.push(normalize(nullspace));
    }
  
    return eigenvectors;
  }
  
  function calculateEigenvalues(matrix: number[][]) {
    // TODO: Implement eigenvalue calculation
    // This is beyond the scope of this question.
    // We can assume that the eigenvalues are given as input.
    const eigenvalues = [0, 0, 0]; // Example values
    return eigenvalues;
  }
  
  function subtractScalar(matrix: number[][], scalar: number) {
    const n = matrix.length;
    const result = [];
    for (let i = 0; i < n; i++) {
      const row = [];
      for (let j = 0; j < n; j++) {
        row.push(matrix[i][j] - scalar * (i === j ? 1 : 0));
      }
      result.push(row);
    }
    return result;
  }
  
  function calculateNullspace(matrix: number[][]) {
    // TODO: Implement nullspace calculation
    // This can be done using Gaussian elimination or other methods.
    // For simplicity, we can assume that the nullspace is given as input.
    const nullspace = [0, 0, 0]; // Example values
    return nullspace;
  }
  
  function normalize(vector: number[]) {
    const length = Math.sqrt(vector.reduce((sum, x) => sum + x*x, 0));
    return vector.map(x => x / length);
  }
  
  // Example usage:
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const eigenvectors = eigenvectors(matrix);
  console.log(eigenvectors);
  