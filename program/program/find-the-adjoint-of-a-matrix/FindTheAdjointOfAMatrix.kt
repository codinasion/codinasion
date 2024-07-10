fun main() {
    val matrixA = listOf(
        listOf(1, 2, 3),
        listOf(4, 5, 6),
        listOf(7, 8, 9)
    )

    val matrixAdjoint = calculateAdjoint(matrixA)

    println("Input (A): $matrixA")
    println("Matrix of Adjoint (A*): $matrixAdjoint")
}

fun calculateAdjoint(matrix: List<List<Int>>): List<List<Int>> {
    val matrixCofactors = calculateCofactors(matrix)
    return transpose(matrixCofactors)
}

fun calculateCofactors(matrix: List<List<Int>>): List<List<Int>> {
    return matrix.mapIndexed { i, row ->
        row.indices.map { j ->
            getCofactor(matrix, i, j)
        }
    }
}

fun transpose(matrix: List<List<Int>>): List<List<Int>> {
    if (matrix.isEmpty() || matrix[0].isEmpty())
        return emptyList()

    val numRows = matrix.size
    val numCols = matrix[0].size

    return List(numCols) { col ->
        List(numRows) { row ->
            matrix[row][col]
        }
    }
}

fun getCofactor(matrix: List<List<Int>>, row: Int, col: Int): Int {
    val sign = if ((row + col) % 2 == 0) 1 else -1
    val subMatrix = getSubMatrix(matrix, row, col)
    return sign * determinant(subMatrix)
}

fun getSubMatrix(matrix: List<List<Int>>, rowToRemove: Int, colToRemove: Int): List<List<Int>> {
    return matrix
        .filterIndexed { i, _ -> i != rowToRemove }
        .map { row -> row.filterIndexed { j, _ -> j != colToRemove } }
}

fun determinant(matrix: List<List<Int>>): Int {
    if (matrix.size == 2)
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]

    return matrix.indices.sumOf { i ->
        val sign = if (i % 2 == 0) 1 else -1
        val subMatrix = getSubMatrix(matrix, 0, i)
        sign * matrix[0][i] * determinant(subMatrix)
    }
}