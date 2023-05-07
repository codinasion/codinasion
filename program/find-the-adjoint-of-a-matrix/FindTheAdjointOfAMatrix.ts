// Function to get cofactor of mat[p][q] in temp[][]. n is current dimension of mat[][]

function getCofactor(mat: number[][], temp: number[][], p: number, q: number) {
    let i = 0, j = 0;
    const n = mat.length;

    // Looping for each element of the matrix
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            // Copying into temporary matrix only those element
            // which are not in given row and column
            if (row !== p && col !== q) {
                temp[i][j++] = mat[row][col];

                // Row is filled, so increase row index and
                // reset col index
                if (j === n - 1) {
                    j = 0;
                    i++;
                }
            }
        }
    }
}

// Recursive function for finding determinant of matrix. n is current dimension of mat[][]. 

function getDeterminant(mat: number[][], n: number) {
    // Base case : if matrix contains single element
    if (n === 1) return mat[0][0];

    let det = 0; // Initialize determinant result
    const l = mat.length;
    const temp: number[][] = new Array(l);// To store cofactors

    for (let i = 0; i < l; i++) {
        temp[i] = new Array(l);
    }

    let sign = 1; // To store sign multiplier

    // Iterate for each element of first row
    for (let f = 0; f < n; f++) {
        // Getting Cofactor of mat[0][f]
        getCofactor(mat, temp, 0, f);
        det += sign * mat[0][f] * getDeterminant(temp, n - 1);

        // terms are to be added with alternate sign
        sign = -sign;
    }

    return det;
}

// Function to get adjoint of mat[l][l] in adj[l][l].
function getAdjoint(mat: number[][]) {
    const l = mat.length;
    const adj: number[][] = new Array(l);
    for (let i = 0; i < l; i++) {
        adj[i] = new Array(l);
    }

    if (l === 1) {
        adj[0][0] = 1;
        return adj;
    }

    // temp is used to store cofactors of mat[][]
    let sign = 1;
    const temp: number[][] = new Array(l);

    for (let i = 0; i < l; i++) {
        temp[i] = new Array(l);
    }

    for (let i = 0; i < l; i++) {
        for (let j = 0; j < l; j++) {
            // Get cofactor of mat[i][j]
            getCofactor(mat, temp, i, j);

            // sign of adj[j][i] positive if sum of row
            // and column indexes is even.
            sign = ((i + j) % 2 === 0) ? 1 : -1;

            // Interchanging rows and columns to get the
            // transpose of the cofactor matrix
            adj[j][i] = (sign) * (getDeterminant(temp, l - 1));
        }
    }

    return adj;
}

function printMat(mat: number[][]) {
    let matRepr = '[';
    for (let i = 0; i < mat.length; i++) {
        matRepr += '\n\t[';
        for (let j = 0; j < mat[i].length; j++) {
            matRepr += mat[i][j];
            if (j < mat[i].length - 1) matRepr += ', ';
            else matRepr += ']';
        }
    }
    matRepr += '\n]';
    console.log(matRepr);
}

const mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log('Original matrix:');
printMat(mat);
console.log('Adjoint matrix:');
printMat(getAdjoint(mat));
