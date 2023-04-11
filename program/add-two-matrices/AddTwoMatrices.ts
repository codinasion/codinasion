function addTwoMatrices(matrix1: number[][], matrix2: number[][]) {
    console.log('summing..')
    var sum: number[][] = [];
    for (let i = 0; i < matrix1.length; i++) {
        sum[i] = []
        for (let j = 0; j < matrix1[i].length; j++) {
            sum[i][j] = matrix1[i][j] + matrix2[i][j]
        }
    }
    return sum
}

const arr1 = [
    [1, 2],
    [4, 5],
    [7, 8]
]

const arr2 = [
    [1, 2],
    [4, 5],
    [7, 8]
]

console.log(addTwoMatrices(arr1, arr2));
