fun main() {
    println("Enter the number of rows: ")
    val rows = readLine()?.toIntOrNull() ?: 0

    if (rows <= 0) {
        println("Invalid number of rows.")
        return
    }

    println("Enter the number of columns: ")
    val columns = readLine()?.toIntOrNull() ?: 0

    if (columns <= 0) {
        println("Invalid number of columns.")
        return
    }

    val matrix = Array(rows) { IntArray(columns) }

    println("Enter the elements of the matrix:")
    for (i in 0 until rows) {
        for (j in 0 until columns) {
            matrix[i][j] = readLine()?.toIntOrNull() ?: 0
        }
    }

    val smallestElement = findSmallestElement(matrix)

    println("Smallest Element in the Matrix: $smallestElement")
}

fun findSmallestElement(matrix: Array<IntArray>): Int {
    if (matrix.isEmpty() || matrix[0].isEmpty()) {
        return 0
    }
    
    var smallest = matrix[0][0]
    
    for (row in matrix) {
        for (element in row) {
            if (element < smallest) {
                smallest = element
            }
        }
    }
    
    return smallest
}
