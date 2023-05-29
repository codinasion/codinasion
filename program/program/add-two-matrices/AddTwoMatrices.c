// C program for addition of two matrices of size n*n
#include <stdio.h>
#define MAX 100

int main()
{
    int i, j, n;
    int mat1[MAX][MAX], mat2[MAX][MAX], mat3[MAX][MAX];

    // Input size of n*n matrix
    scanf("%d", &n);

    // Input Elements for First Matrix
    for(i=0; i<n; i++)
    {
        for(j=0; j<n; j++)
            scanf("%d", &mat1[i][j]);
    }

   // Input Elements for Second Matrix
    for(i=0; i<n; i++)
    {
        for(j=0; j<n; j++)
            scanf("%d", &mat2[i][j]);
    }

    // Addition
    for(i=0; i<n; i++)
    {
        for(j=0; j<n; j++)
            mat3[i][j] = mat1[i][j] + mat2[i][j];
    }

    // Show addition result
    for(i=0; i<n; i++)
    {
        for(j=0; j<n; j++)
            printf("%d ", mat3[i][j]);
        printf("\n");
    }

    return 0;
}