import org.apache.commons.math3.linear.*

fun main(args: Array<String>) {
    val matrix: RealMatrix = Array2DRowRealMatrix(
        arrayOf(
            doubleArrayOf(1.0, 2.0, 3.0),
            doubleArrayOf(4.0, 5.0, 6.0),
            doubleArrayOf(7.0, 8.0, 9.0)
        )
    )

    val decomposition = EigenDecomposition(matrix)

    val eigenvalues: RealVector = decomposition.getRealEigenvalues()
    val eigenvectors: RealMatrix = decomposition.getV()

    for (i in 0 until eigenvectors.getColumnDimension()) {
        val eigenvector: RealVector = eigenvectors.getColumnVector(i)
        System.out.println(eigenvector)
    }
}
