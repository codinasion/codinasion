#include <stdio.h>

int findMinorAndSign(int a[3][3], int row, int col)
{
    int detM[4], p = 0;
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            if (i != row && j != col)
            {
                detM[p++] = a[i][j];
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

void printMatrix(float a[3][3])
{
    printf("[");
    for (int i = 0; i < 3; i++)
    {
        printf("[");
        for (int j = 0; j < 3; j++)
        {
            printf("%f", a[i][j]);
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

void transposeMatrix(int input[3][3], int output[3][3])
{
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            output[j][i] = input[i][j];
        }
    }
}
int findDeterminantOfMatrixUsingCoFactorMatrix(int input[3][3], int coFactors[3][3])
{
    int result = 0;
    for (int j = 0; j < 3; j++)
    {
        result += (input[0][j] * coFactors[0][j]);
    }
    return result;
}
int main()
{
    int input[3][3] = {{4, 5, 1}, {3, 4, 12}, {10, 2, 1}};

    int coFactors[3][3];
    coFactorMatrix(input, coFactors);

    int adjoints[3][3];
    transposeMatrix(coFactors, adjoints);

    int determinant = findDeterminantOfMatrixUsingCoFactorMatrix(input, coFactors);

    if (determinant == 0) // if det=0 , inverse does not exist
    {
        printf("Its is singular matrix ,there is no inverse of it");
    }
    else
    {
        float inverseMatrix[3][3];

        for (int i = 0; i < 3; i++)
        {
            for (int j = 0; j < 3; j++)
            {
                inverseMatrix[i][j] = ((float)adjoints[i][j] / determinant);
            }
        }

        printMatrix(inverseMatrix);
    }
}