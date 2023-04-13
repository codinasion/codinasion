#include <iostream>
using namespace std;

void printMatrix(int a[3][3])
{
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            printf("%d ", a[i][j]);
        }
        if (i != 2)
        {
            printf("\n");
        }
    }

    printf("\n");
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

int main()
{
    int input[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

    int transpose[3][3];
    transposeMatrix(input, transpose);

    printMatrix(transpose);
}