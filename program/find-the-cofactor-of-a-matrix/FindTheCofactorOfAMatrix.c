#include <stdio.h>

int findMinorAndSign(int matrix[3][3], int row, int col)
{
    int detM[4], p = 0;
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            if (i != row && j != col)
            {
                detM[p++] = matrix[i][j];
            }
        }
    }

    int detValue = detM[0] * detM[3] - detM[1] * detM[2];

    if ((row + col) % 2 == 1)
    {
        detValue *= -1;
    }

    return detValue;
}

void printMatrix(int matrix[3][3])
{
    printf("[");
    for (int i = 0; i < 3; i++)
    {
        printf("[");
        for (int j = 0; j < 3; j++)
        {
            printf("%d", matrix[i][j]);
            if (j != 2)
            {
                printf(", ");
            }
        }
        printf("]");
        if (i != 2)
        {
            printf(", ");
        }
    }

    printf("]\n");
}

void coFactorMatrix(int input[3][3], int output[3][3])
{
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            output[i][j] = findMinorAndSign(input, i, j);
        }
    }
}

int main()
{
    int input[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

    int coFactors[3][3];
    coFactorMatrix(input, coFactors);

    printMatrix(coFactors);
}