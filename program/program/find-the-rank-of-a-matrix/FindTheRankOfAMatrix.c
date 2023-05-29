#include <stdio.h>

#define ROWS 3
#define COLS 3

int rank(int matrix[ROWS][COLS]) {
    int i, j, k, r;
    int row, col;
    int pivot_row, pivot_col;
    int temp, multiplier;
    int rank = 0;

    // Apply Gaussian elimination to the matrix
    for (r = 0; r < ROWS && r < COLS; r++) {
        // Find pivot row
        pivot_row = r;
        for (i = r + 1; i < ROWS; i++) {
            if (matrix[i][r] > matrix[pivot_row][r]) {
                pivot_row = i;
            }
        }

        // Swap rows
        for (j = 0; j < COLS; j++) {
            temp = matrix[r][j];
            matrix[r][j] = matrix[pivot_row][j];
            matrix[pivot_row][j] = temp;
        }

        // Reduce rows
        if (matrix[r][r] != 0) {
            for (i = r + 1; i < ROWS; i++) {
                multiplier = matrix[i][r] / matrix[r][r];
                for (j = r; j < COLS; j++) {
                    matrix[i][j] = matrix[i][j] - multiplier * matrix[r][j];
                }
            }
        }
    }

    // Count non-zero rows in row echelon form
    for (i = 0; i < ROWS; i++) {
        row = 0;
        for (j = 0; j < COLS; j++) {
            if (matrix[i][j] != 0) {
                row = 1;
                break;
            }
        }
        if (row == 1) {
            rank++;
        }
    }

    return rank;
}

int main() {
    int matrix[ROWS][COLS] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    int rank_of_matrix;

    rank_of_matrix = rank(matrix);
    printf("Rank of matrix = %d\n", rank_of_matrix);

    return 0;
}