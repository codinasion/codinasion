import java.util.Arrays;

public class FindTheEigenvaluesOfAMatrix {
    public static void main(String[] args) {
        // Read the input matrix
        Scanner scanner = new Scanner(System.in);
        double[][] matrix = {{1,2,3},{4,5,6},{7,8,9}};

        // Calculate the eigenvalues
        double[] eigenvalues = calculateEigenvalues(matrix);

        // Print the eigenvalues
        System.out.println(Arrays.toString(eigenvalues));
    }

    public static double[] calculateEigenvalues(double[][] matrix) {
        // Create the companion matrix
        double[][] companionMatrix = createCompanionMatrix(matrix);

        // Calculate the eigenvalues of the companion matrix
        double[] eigenvalues = calculateEigenvalues(companionMatrix);

        return eigenvalues;
    }

    public static double[][] createCompanionMatrix(double[][] matrix) {
        // Get the size of the matrix
        int size = matrix.length;

        // Create the companion matrix
        double[][] companionMatrix = new double[size][size];
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                if (i < size - 1) {
                    companionMatrix[i][j] = -matrix[i + 1][j] / matrix[i][0];
                } else {
                    companionMatrix[i][j] = 0;
                }
            }
        }

        return companionMatrix;
    }
}
