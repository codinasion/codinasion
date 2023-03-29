#include <stdio.h>
#include <iostream>

using namespace std;

#define ROWS 3
#define COLS 3

int Rank(int matrix[ROWS][COLS])
{
    int pivot = 0;
    int rank = 0;

    // loop over rows
    for(int i = 0; i < 3; i++)
    {
        // check if pivot element is zero
        if(matrix[i][pivot] == 0)
        {
            // swap rows to get non-zero pivot element
            for(int j = i + 1; j < 3; j++)
            {
                if(matrix[j][pivot] != 0)
                {
                    // swap rows
                    for(int k = 0; k < 3; k++)
                    {
                        int temp = matrix[i][k];
                        matrix[i][k] = matrix[j][k];
                        matrix[j][k] = temp;
                    }
                    break;
                }
            }
        }

        // check if pivot element is non-zero
        if(matrix[i][pivot] != 0)
        {
            // increment rank and reduce rows
            rank++;
            for(int j = i + 1; j < 3; j++)
            {
                int factor = matrix[j][pivot] / matrix[i][pivot];
                for(int k = pivot; k < 3; k++)
                {
                    matrix[j][k] = matrix[j][k] - factor * matrix[i][k];
                }
            }
        }

        // increment pivot index
        pivot++;
    }

    return rank;
}

int main()
{
    int matrix[ROWS][COLS] = {{3,2,1},{6,4,2},{7,8,9}};
    int RANK_OF_MATRIX;

    RANK_OF_MATRIX = Rank(matrix);
    cout << "Rank of Matrix: " << RANK_OF_MATRIX << endl;
    return 0;
}