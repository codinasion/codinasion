#include <iostream> 
using namespace std; 

int main()
{
    int matrix[3][3];
    int determinant = 0;

    cout << "Enter the 9 elements of matrix: " << endl;

    for(int i = 0; i < 3; i++)
        for(int j = 0; j < 3; j++)
            cin >> matrix[i][j];

    cout << "\nThe matrix is\n";

    for(int i = 0; i < 3; i++)
    {
        cout << "\n";

        for(int j = 0; j < 3; j++)
            cout << matrix[i][j] << "\t";
    }

    for(int i = 0; i < 3; i++)
        determinant = determinant + (matrix[0][i] * (matrix[1][(i+1)%3] * matrix[2][(i+2)%3] - matrix[1][(i+2)%3] * matrix[2][(i+1)%3]));

    cout << "\nDeterminant of the matrix is: " << determinant << endl;


    return 0;
}