object MatrixRotation {
  def main(args: Array[String]): Unit = {
    val matrix = Array(
      Array(1, 2, 3),
      Array(4, 5, 6),
      Array(7, 8, 9)
    )

    println("Original Matrix:")
    printMatrix(matrix)

    val rotatedMatrix = rotateMatrix90Degrees(matrix)

    println("\nRotated Matrix:")
    printMatrix(rotatedMatrix)
  }

  def rotateMatrix90Degrees(matrix: Array[Array[Int]]): Array[Array[Int]] = {
    // Transpose the matrix
    val transposedMatrix = transpose(matrix)

    // Reverse each row
    transposedMatrix.map(_.reverse)
  }

  def transpose(matrix: Array[Array[Int]]): Array[Array[Int]] = {
    Array.tabulate(matrix.length, matrix(0).length) { (i, j) =>
      matrix(j)(i)
    }
  }

  def printMatrix(matrix: Array[Array[Int]]): Unit = {
    matrix.foreach { row =>
      println(row.mkString(" "))
    }
  }
}
