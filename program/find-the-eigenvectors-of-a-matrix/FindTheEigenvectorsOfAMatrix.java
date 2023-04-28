import org.apache.commons.math3.linear.*;

public class Eigenvectors {
    public static void main(String[] args) {
        // Input matrix
        RealMatrix matrix = new Array2DRowRealMatrix(new double[][]{
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        });

        // Eigen decomposition
        EigenDecomposition decomposition = new EigenDecomposition(matrix);

        // Eigenvalues
        RealVector eigenvalues = decomposition.getRealEigenvalues();
        System.out.println("Eigenvalues: " + eigenvalues);

        // Eigenvectors
        RealMatrix eigenvectors = decomposition.getV();
        System.out.println("Eigenvectors:");
        for (int i = 0; i < eigenvectors.getColumnDimension(); i++) {
            RealVector eigenvector = eigenvectors.getColumnVector(i);
            System.out.println(eigenvector);
        }
    }
}
