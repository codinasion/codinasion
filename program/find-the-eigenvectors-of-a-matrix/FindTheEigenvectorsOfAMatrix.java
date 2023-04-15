import Jama.Matrix;
import Jama.EigenvalueDecomposition;

public class FindTheEigenvectorsOfAMatrix {

    public static void main(String[] args) {
        double[][] matrixArray = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

        Matrix matrix = new Matrix(matrixArray);
        EigenvalueDecomposition eigDecomp = new EigenvalueDecomposition(matrix);

        Matrix eigVectors = eigDecomp.getV();
        eigVectors = eigVectors.transpose(); // Transpose to get row vectors

        eigVectors.print(10, 8); // Print with precision 10 and width 8
    }

}