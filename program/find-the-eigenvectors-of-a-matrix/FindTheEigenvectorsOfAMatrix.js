const math = require('mathjs');

const matrixArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const matrix = math.matrix(matrixArray);
const eigDecomp = math.eigs(matrix);

const eigVectors = eigDecomp.vectors;
const eigVectorsT = math.transpose(eigVectors); // Transpose to get row vectors

console.log(math.format(eigVectorsT, {precision: 10, columnSeparator: '  '})); // Print with precision 10 and column separator '  '
