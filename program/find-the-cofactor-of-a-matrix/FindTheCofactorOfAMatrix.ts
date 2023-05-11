function minorAndSign(matrix: number[], row: number, column: number) {
    const detNums = [];
    let detNumIdx: number = 0;
    for (let i: number = 0; i < 3; i++) {
        for (let j: number = 0; j < 3; j++) {
            if ((i != row) && (j != column)) {
                detNums[detNumIdx] = matrix[i][j];
                detNumIdx += 1;
            }
        }
    }
 
    if ((row+column) % 2 != 0) {
        return (detNums[1]*detNums[2] - detNums[0]*detNums[3])
    }
    return (detNums[0]*detNums[3] - detNums[1]*detNums[2])
}

function printMatrix(matrix) {
    for (let row: number = 0; row < 3; row++) {
        console.log(matrix[row]);
    }
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]

const coFacMatrix = [[], [], []]

for (let i: number = 0; i < 3; i++) {
    for (let j: number = 0; j < 3; j++) {
        const minor: number = minorAndSign(matrix, i, j);
        coFacMatrix[i][j] = minor;
    }
}
printMatrix(coFacMatrix);
