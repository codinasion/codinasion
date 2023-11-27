import scala.util.Try

object MatrixInverse {
  
  def inverse(matrix: Array[Array[Double]]): Option[Array[Array[Double]]] = {
    Try {
      val determinant = matrixDeterminant(matrix)
      if (determinant == 0) None
      else Some(matrixAdjoint(matrix).map(_.map(_ / determinant)))
    }.toOption.flatten
  }

  def matrixDeterminant(matrix: Array[Array[Double]]): Double = {
    val a = matrix(0)(0); val b = matrix(0)(1); val c = matrix(0)(2)
    val d = matrix(1)(0); val e = matrix(1)(1); val f = matrix(1)(2)
    val g = matrix(2)(0); val h = matrix(2)(1); val i = matrix(2)(2)

    a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g)
  }

  def matrixAdjoint(matrix: Array[Array[Double]]): Array[Array[Double]] = {
    val a = matrix(0)(0); val b = matrix(0)(1); val c = matrix(0)(2)
    val d = matrix(1)(0); val e = matrix(1)(1); val f = matrix(1)(2)
    val g = matrix(2)(0); val h = matrix(2)(1); val i = matrix(2)(2)

    val cofactorMatrix = Array(
      Array((e * i - f * h), -(b * i - c * h), (b * f - c * e)),
      Array(-(d * i - f * g), (a * i - c * g), -(a * f - c * d)),
      Array((d * h - e * g), -(a * h - b * g), (a * e - b * d))
    )
    
    transposeMatrix(cofactorMatrix)
  }

  def transposeMatrix(matrix: Array[Array[Double]]): Array[Array[Double]] = {
    (for (j <- matrix(0).indices) yield {
      (for (i <- matrix.indices) yield {
        matrix(i)(j)
      }).toArray
    }).toArray
  }

  def main(args: Array[String]): Unit = {
    val matrix = Array(
      Array(1.0, 2.0, 3.0),
      Array(4.0, 5.0, 6.0),
      Array(7.0, 8.0, 9.0)
    )

    inverse(matrix) match {
      case Some(invMatrix) =>
        println("Inverse of the matrix:")
        invMatrix.foreach(row => println(row.mkString(" ")))
      case None =>
        println("The matrix doesn't have an inverse.")
    }
  }
}
