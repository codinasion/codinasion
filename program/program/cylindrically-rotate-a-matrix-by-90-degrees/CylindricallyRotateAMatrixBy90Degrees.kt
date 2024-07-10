fun rotateMatrix(matrix: Array<IntArray>) {
    val rows = matrix.size
    val cols = matrix[0].size

    //Creates a new matrix with swapped dimensions
    val rotatedMatrix = Array(cols) { IntArray(rows) }

    //Performs the rotation
    for (i in 0 until rows) {
        for (j in 0 until cols) {
            //Rotates each element by swapping the row and column indices
            rotatedMatrix[j][rows - 1 - i] = matrix[i][j]
        }
    }

    //Prints the rotated matrix
    for (row in rotatedMatrix) {
        for (num in row) {
            //Prints each element followed by a space
            print("$num ")
        }
        //Moves to the next line after printing a row
        println()
    }
}

fun main() {
    //Defines the original matrix
    val matrix = arrayOf(
        intArrayOf(1, 2, 3),
        intArrayOf(4, 5, 6),
        intArrayOf(7, 8, 9)
    )

    //Calls the rotateMatrix function
    rotateMatrix(matrix)
}