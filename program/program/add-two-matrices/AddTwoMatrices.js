function addMatrix(matrix1, matrix2) {
  let rows = matrix1.length;
  let cols = matrix1[0].length;
  let result = new Array(rows);
  for (let i = 0; i < rows; i++) {
    result[i] = new Array(cols);
    for (let j = 0; j < cols; j++) {
      result[i][j] = matrix1[i][j] + matrix2[i][j];
    }
  }
  return result;
}

let matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(addMatrix(matrix1, matrix2));
