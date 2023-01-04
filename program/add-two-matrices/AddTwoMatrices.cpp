
// C++ program for addition of two matrices
#include <bits/stdc++.h>
using namespace std;
#define n 3

// Function adds mat1[][] and mat2[][], and stores the result in mat3[][]
void add(int mat1[][n], int mat2[][n], int mat3[][n])
{
    int i, j;
    for(i=0; i<n; i++)
    {
        for(j=0; j<n; j++)
            mat3[i][j] = mat1[i][j]+mat2[i][j];
    }
}

int main()
{
    int mat1[n][n], mat2[n][n], mat3[n][n], i, j ;

    //Input Elements for First Matrix
    for(i=0; i<n; i++)
    {
        for(j=0; j<n; j++)
            cin>>mat1[i][j];
    }

   //Input Elements for Second Matrix
    for(i=0; i<n; i++)
    {
        for(j=0; j<n; j++)
            cin>>mat2[i][j];
    }

    //Addition the two given matrices
    add(mat1, mat2, mat3);

    //Addition result
    for(i=0; i<n; i++)
    {
        for(j=0; j<n; j++)
            cout<<mat3[i][j]<<" ";
        cout<<endl;
    }

    return 0;
}