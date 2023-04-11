import java.util.Scanner;

public class MatrixRank {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Read matrix dimensions
        System.out.print("Enter number of rows: ");
        int m = sc.nextInt();
        System.out.print("Enter number of columns: ");
        int n = sc.nextInt();

        // Read matrix elements
        int[][] matrix = new int[m][n];
        System.out.println("Enter matrix elements:");
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                matrix[i][j] = sc.nextInt();
            }
        }

        // Find rank of matrix
        int rank = 0;
        for (int j = 0; j < n; j++) {
            // Create a pivot variable to store the value of the pivot element
            int pivot = -1;

            // Search for a non-zero pivot element in the column
            for (int i = rank; i < m; i++) {
                if (matrix[i][j] != 0) {
                    pivot = i;
                    break;
                }
            }

            if (pivot != -1) {
                // Swap rows to bring pivot element to the diagonal
                int[] temp = matrix[pivot];
                matrix[pivot] = matrix[rank];
                matrix[rank] = temp;

                // Reduce other rows using the pivot element
                for (int i = rank + 1; i < m; i++) {
                    int factor = matrix[i][j] / matrix[rank][j];
                    for (int k = j; k < n; k++) {
                        matrix[i][k] -= factor * matrix[rank][k];
                    }
                }

                // Move to the next row and column
                rank++;
                if (rank == m) {
                    break;
                }
            }
        }

        // Print rank of matrix
        System.out.println("Rank of matrix is: " + rank);

        sc.close();
    }
}
