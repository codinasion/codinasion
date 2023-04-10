import java.util.Arrays;
public class FindTheRankOfAMatrix {
    public static void main(String[] args) {
        int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        System.out.println(matrixRank(matrix));
    }

    public static int matrixRank(int[][] matrix) {
        int rows = matrix.length;
        int cols = matrix[0].length;

        int rank = Math.min(rows, cols);

        for (int i = 0; i < rank; i++) {
            if (matrix[i][i] != 0) {
                for (int j = i + 1; j < rows; j++) {
                    int factor = matrix[j][i] / matrix[i][i];
                    for (int k = i; k < cols; k++) {
                        matrix[j][k] -= factor * matrix[i][k];
                    }
                }
            } else {
                boolean reduce = true;
                for (int j = i + 1; j < rows; j++) {
                    if (matrix[j][i] != 0) {
                        int[] temp = matrix[i];
                        matrix[i] = matrix[j];
                        matrix[j] = temp;
                        reduce = false;
                        break;
                    }
                }
                if (reduce) {
                    rank--;
                    for (int j = 0; j < rows; j++) {
                        matrix[j][i] = matrix[j][rank];
                    }
                }
                i--;
            }
        }

        return rank;
    }
}

