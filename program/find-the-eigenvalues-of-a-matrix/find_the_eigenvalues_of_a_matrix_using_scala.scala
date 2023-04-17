import org.apache.commons.math3.linear.{EigenDecomposition, RealMatrix, MatrixUtils}

object EigenvaluesCalculator {
  def main(args: Array[String]): Unit = {
    
    val matrixData = Array(Array(1.0, 2.0), Array(3.0, 4.0))
    val matrix: RealMatrix = MatrixUtils.createRealMatrix(matrixData)

    val eigenDecomposition = new EigenDecomposition(matrix)

    val eigenvalues = eigenDecomposition.getRealEigenvalues()

    println("Eigenvalues:")
    eigenvalues.foreach(println)
  }
}
