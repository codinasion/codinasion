//simple function to find adj of matrix
let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function adjoint(matrix) {
let A00 = matrix[0][0];
let A01 = matrix[0][1];
let A02 = matrix[0][2];
let A10 = matrix[1][0];
let A11 = matrix[1][1];
let A12 = matrix[1][2];
let A20 = matrix[2][0];
let A21 = matrix[2][1];
let A22 = matrix[2][2];

let adj = [[(A11 * A22 - A12 * A21), -(A01 * A22 - A02 * A21), (A01 * A12 - A02 * A11)],
[-(A10 * A22 - A12 * A20), (A00 * A22 - A02 * A20), -(A00 * A12 - A02 * A10)],
[(A10 * A21 - A11 * A20), -(A00 * A21 - A01 * A20), (A00 * A11 - A01 * A10)]];
return adj;
}

let adjaointOfMatrix = adjoint(mat)
console.log(adjaointOfMatrix)

//adjoint of matrix using loop
// function adjoint(matrix) {
//     let adj = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

//     for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 3; j++) {
//             let a = (i + 1) % 3;
//             let b = (j + 1) % 3;
//             let c = (i + 2) % 3;
//             let d = (j + 2) % 3;

//             adj[j][i] = (matrix[a][b] * matrix[c][d] - matrix[a][d] * matrix[c][b]);
//             if ((i + j) % 2 === 1) {
//                 adj[j][i] = -adj[j][i];
//             }
//         }
//     }

//     return adj;
// }


