class FindTheTransposeOfAMatrix {
    public static void main(String[] args) {
        int matrix[][] = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };
        int size = matrix.length;

        for (int i = 0; i < size; i++)
            for (int j = i + 1; j < size; j++) {
                int help = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = help;
            }

        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++)
                System.out.print(matrix[i][j] + " ");
            System.out.println("");
        }
    }
}