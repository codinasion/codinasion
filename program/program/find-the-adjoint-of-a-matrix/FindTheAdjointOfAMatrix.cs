using System;

class FindTheAdjointOfAMatrix {

    /// <summary>
    /// The function that calculates the adjoint of a matrix
    /// </summary>
    public static int[,] GetAdjoint(int[,] matrix) {

        // Getting the size of the matrix (square matrix)
        int n = matrix.GetLength(0);
        // Creating a 2D array to store the adjoint matrix
        int[,] adjoint = new int[n, n];

        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                // Getting the cofactor of the matrix[i, j]
                int[,] cofactor = GetCofactor(matrix, i, j);
                // Calculating the sign for the current element
                int sign = (int)Math.Pow(-1, i + j);
                // Calculating the determinant of the cofactor
                int determinant = GetDeterminant(cofactor, n - 1);
                // Multiplying the determinant by the sign and assigning it to adjoint[j, i]
                adjoint[j, i] =  sign * determinant;
            }
        }
        
        // Returning the calculated adjoint matrix
        return adjoint;
    }

    /// <summary>
    /// Function to calculate the cofactor of a matrix element
    /// </summary>
    public static int[,] GetCofactor(int[,] matrix, int row, int col) {

        // Getting the size of the matrix (square matrix)
        int n = matrix.GetLength(0);
        // Creating a 2D array to store the cofactor matrix
        int[,] cofactor = new int[n - 1, n - 1];

        int rowOffset = 0;
        int colOffset = 0;

        for(int i = 0; i < n; i++) {
            if(i == row) {
                // Skipping the current row by setting rowOffset to -1
                rowOffset = -1;
                continue;
            }

            colOffset = 0;

            for(int j = 0; j < n; j++) {
                if(j == col) {
                    // Skipping the current column by setting colOffset to -1
                    colOffset = -1;
                    continue;
                }

                cofactor[i + rowOffset, j + colOffset] = matrix[i, j];
            }
        }

        // Returning the calculated cofactor matrix
        return cofactor;
    }

    /// <summary>
    /// Function to calculate the determinant of a matrix
    /// </summary>
    public static int GetDeterminant(int[,] matrix, int size) {

        if(size == 1) {
            // The Base Case, returning the single element for a 1x1 matrix
            return matrix[0, 0];
        }

        int determinant = 0;
        int sign = 1;

        for(int i = 0; i < size; i++) {
            int[,] submatrix = new int[size - 1, size - 1];

            for(int j = 0; j < size - 1; j++) {
                for(int k = 0; k < size - 1; k++) {
                    if(k < i) {
                        // Filling the submatrix while skipping the current column 
                        submatrix[j, k] = matrix[j + 1, k];
                    }
                    else {
                        // Filling the submatrix while skipping the current column
                        submatrix[j, k] = matrix[j + 1, k + 1];
                    }
                }
            }

            // Calculating the determinant
            determinant += sign * matrix[0, i] * GetDeterminant(submatrix, size - 1);
            // Toggling the sign for the next iteration
            sign = -sign;
        }

        // Returning the calculated determinant
        return determinant;
    }

    /// <summary>
    /// Function to display the matrix in the specified format
    /// </summary>
    public static void DisplayMatrix(int[,] matrix) {

        int numRows = matrix.GetLength(0);
        int numCols = matrix.GetLength(1);

        Console.Write("[");
        for(int i = 0; i < numRows; i++) {
            Console.Write("[");
            for(int j = 0; j < numCols; j++) {
                Console.Write(matrix[i, j]);
                if(j != numCols - 1) {
                    Console.Write(", ");
                }
            }
            Console.Write("]");
            if(i != numRows - 1) {
                Console.Write(", ");
            }
        }
        Console.Write("]");
        Console.WriteLine();
    }

    /// <summary>
    /// Main Method
    /// </summary>
    public static void Main(string[] args) {

        // The Original Matrix
        int[,] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        Console.WriteLine("Original Matrix:");
        DisplayMatrix(matrix);

        // Calculating the adjoint matrix
        int[,] adjoint = GetAdjoint(matrix);

        Console.WriteLine("\nAdjoint Matrix:");
        DisplayMatrix(adjoint);
    }
}
