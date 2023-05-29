#include <stdio.h>
#include <stdlib.h>

#define ROW_COUNT 3
#define COL_COUNT 3


void print_matrix(int **matrix)
{
	int i = 0, j = 0;
	for ( ; i < ROW_COUNT; ++i) {
		for (j = 0; j < COL_COUNT; ++j)
			printf("%d ", matrix[i][j]);
		printf("\n");
	}

	return;
}

int **transpose(int **a)
{
	int i = 0, j = 0;

	int **ret = malloc(sizeof(int *)*ROW_COUNT);
	for (i = 0; i < ROW_COUNT; ++i) {
		ret[i] = malloc(sizeof(int) * COL_COUNT);
	}
	
	for (i =0 ; i < ROW_COUNT; ++i) {
		for (j = 0; j < COL_COUNT; ++j)
			ret[j][i] = a[i][j];
	}

	return ret;
}


int main()
{
	int count = 1;
	int i = 0, j = 0;
	int **matrix;
	matrix = malloc(ROW_COUNT * sizeof(int *));
	for ( ; i < ROW_COUNT; ++i) {
		matrix[i] = malloc(COL_COUNT * sizeof(int));
		for (j = 0; j < COL_COUNT; ++j)
			matrix[i][j] = count++;
	}

	printf("Input:\n");
	print_matrix(matrix);

	printf("\nOutput:\n");
	int **ret_matrix = transpose(matrix);
	print_matrix(ret_matrix);

	return 0;	
}
