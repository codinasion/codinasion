import java.util.*;

public class FindTheInverseOfA {

    public static double[][] inverse(double[][] matrix) {
        int n = matrix.length;
        double[][] inverse = new double[n][n];

        // create the identity matrix
        for (int i = 0; i < n; i++) {
            inverse[i][i] = 1;
        }

        // augment the matrix with the identity matrix
        double[][] augmentedMatrix = new double[n][2 * n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                augmentedMatrix[i][j] = matrix[i][j];
            }
            for (int j = n; j < 2 * n; j++) {
                augmentedMatrix[i][j] = inverse[i][j - n];
            }
        }

        // perform Gaussian elimination
        for (int i = 0; i < n; i++) {
            double pivot = augmentedMatrix[i][i];
            for (int j = i; j < 2 * n; j++) {
                augmentedMatrix[i][j] /= pivot;
            }
            for (int k = 0; k < n; k++) {
                if (k != i) {
                    double factor = augmentedMatrix[k][i];
                    for (int j = i; j < 2 * n; j++) {
                        augmentedMatrix[k][j] -= factor * augmentedMatrix[i][j];
                    }
                }
            }
        }

        // extract the inverse from the augmented matrix
        for (int i = 0; i < n; i++) {
            for (int j = n; j < 2 * n; j++) {
                inverse[i][j - n] = augmentedMatrix[i][j];
            }
        }

        return inverse;
    }

    public static void main(String[] args) {
        double[][] matrix = {{1,2,3},{4,5,6},{7,8,9}};
        double[][] inverse = inverse(matrix);

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(inverse[i][j] + " ");
            }
            System.out.println();
        }
    }
}
