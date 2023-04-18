import org.apache.commons.math3.linear.{EigenDecomposition, Array2DRowRealMatrix}

val matrix = new Array2DRowRealMatrix(Array(
  Array(1.0, 2.0, 3.0),
  Array(4.0, 5.0, 6.0),
  Array(7.0, 8.0, 9.0)
))

val eigen = new EigenDecomposition(matrix)
val eigenvalues = eigen.getRealEigenvalues

println("Eigenvalues:")
eigenvalues.foreach(println)
