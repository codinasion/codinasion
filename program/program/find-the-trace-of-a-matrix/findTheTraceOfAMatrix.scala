object MatrixTrace {
  def main(args: Array[String]): Unit = {
    val matrix = Array(
      Array(1, 2, 3),
      Array(4, 5, 6),
      Array(7, 8, 9)
    )

    val trace = calculateTrace(matrix)
    println(s"The trace of the matrix is: $trace")
  }

  def calculateTrace(matrix: Array[Array[Int]]): Int = {
    (0 until matrix.length).map(i => matrix(i)(i)).sum
  }
}
