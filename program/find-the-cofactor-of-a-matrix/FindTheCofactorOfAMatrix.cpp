#include <iostream>


// Matrix Class
class Matrix {
public:
    /*
    Arguments: numRows, numColumns, array pointer
    Returns: a Matrix with the specified rows and columns,
        with each element filled according to appearance in array pointer
    Example:
        - 2, 2, arrPtr
        - arrPtr points to int array with values [1, 2, 3, 4]
    */
    Matrix(int numRows, int numColumns, int* arrPtr) {
        int** matrix = new int* [numRows];
        this->numRows = numRows;
        this->numColumns = numColumns;

        for (int i = 0; i < numRows; i++) {
            matrix[i] = new int[numColumns];

            for (int j = 0; j < numColumns; j++) {
                matrix[i][j] = *arrPtr;
                arrPtr += 1;
            }
        }
        this->matrix = matrix;
    }

    /*
    Function: The copy constructor for the Matrix Class
    Arguments: a Matrix
    Returns: an identical Matrix as a deep copy
    Example: Matrix B = A, or Matrix B(A)
    */
    Matrix(const Matrix& rhs) {
        int** matrix = new int* [rhs.numRows];
        this->numRows = rhs.numRows;
        this->numColumns = rhs.numColumns;

        for (int i = 0; i < rhs.numRows; i++) {
            matrix[i] = new int[rhs.numColumns];

            for (int j = 0; j < rhs.numColumns; j++) {
                matrix[i][j] = rhs.matrix[i][j];
            }
        }
        this->matrix = matrix;
    }

    /*
    Function: destructor for the Matrix Class
    */
    ~Matrix() {
        for (int i = 0; i < numRows; i++) {
            delete[] matrix[i];
            matrix[i] = NULL;
        }
        matrix = NULL;
    }

    /*
    Function: Overloads [] operator to access rows in Matrix
    Arguments: A row index to be accessed
    Returns: the pointer from that row index (this row is a list of values)
    Example: A[0]
    */
    int* operator [] (int rowIdx) {
        int* rowPtr = this->matrix[rowIdx];
        return rowPtr;
    }

private:
    int** matrix;
    int numRows;
    int numColumns;
};


// function prototypes
int minorAndSign(Matrix, int, int);
void printMatrix(Matrix, int, int);


// main
int main()
{
    // create a 3x3 matrix
    int rows = 3;
    int columns = 3;
    int matrixVal[rows*columns] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    int* matrixValPtr = matrixVal;
    const Matrix matrix = Matrix(rows, columns, matrixValPtr);
    
    // create cofactor matrix
    int empty[rows*columns] = {};
    int* emptyPtr = empty;
    Matrix coFacMatrix = Matrix(rows, columns, emptyPtr);

    // edit cofactor matrix
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++)
        {
            int minor = minorAndSign(matrix, i, j);
            coFacMatrix[i][j] = minor;
        }
    }
    // print matrix
    printMatrix(coFacMatrix, rows, columns);

    // assign remaining pointers to NULL
    matrixValPtr = NULL;
    emptyPtr = NULL;

    return 0;
}


int minorAndSign(Matrix matrix, int row, int column) {
    int detNums[4];
    int detNumsIdx = 0;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            if ((i != row) && (j != column)) {
                detNums[detNumsIdx] = matrix[i][j];
                detNumsIdx += 1;
            }
        }
    }

    // If row + column are odd, multiply by -1
    if ((row+column) % 2 != 0) {
        return (-1)*(detNums[0]*detNums[3] - detNums[1]*detNums[2]);
    }
    return (detNums[0]*detNums[3] - detNums[1]*detNums[2]);
}


// Prints each element of the matrix
void printMatrix(Matrix matrix, int row, int col) {
    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            if (j != (col-1)) {
                std::cout << matrix[i][j] << ' ';
            }
            else {
                std::cout << matrix[i][j] << std::endl;
            }
        }
    }
}
