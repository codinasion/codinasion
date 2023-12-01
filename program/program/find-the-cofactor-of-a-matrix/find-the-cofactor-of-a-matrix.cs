using System;

class Program
{
    static void Main()
    {
        // Define the sample matrix (3x3)
        int[,] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        Console.WriteLine("Original Matrix:");
        PrintMatrix(matrix);

        Console.WriteLine("\nCofactor of the Matrix:");
        int[,] cofactorMatrix = CalculateCofactor(matrix);
        PrintMatrix(cofactorMatrix);
    }

    static void PrintMatrix(int[,] matrix)
    {
        int rows = matrix.GetLength(0);
        int columns = matrix.GetLength(1);

        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < columns; j++)
            {
                Console.Write(matrix[i, j] + "\t");
            }
            Console.WriteLine();
        }
    }

    static int[,] CalculateCofactor(int[,] matrix)
    {
        int rows = matrix.GetLength(0);
        int columns = matrix.GetLength(1);

        int[,] cofactorMatrix = new int[rows, columns];

        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < columns; j++)
            {
                cofactorMatrix[i, j] = CalculateCofactorElement(matrix, i, j) * (int)Math.Pow(-1, i + j);
            }
        }

        return cofactorMatrix;
    }

    static int CalculateCofactorElement(int[,] matrix, int row, int column)
    {
        int rows = matrix.GetLength(0);
        int columns = matrix.GetLength(1);

        int[,] submatrix = new int[rows - 1, columns - 1];

        int destRow = 0;
        for (int i = 0; i < rows; i++)
        {
            if (i == row)
                continue;

            int destColumn = 0;
            for (int j = 0; j < columns; j++)
            {
                if (j == column)
                    continue;

                submatrix[destRow, destColumn] = matrix[i, j];
                destColumn++;
            }

            destRow++;
        }

        return Determinant(submatrix);
    }

    static int Determinant(int[,] matrix)
    {
        int rows = matrix.GetLength(0);
        int columns = matrix.GetLength(1);

        if (rows != columns)
            throw new ArgumentException("The matrix is not square.");

        if (rows == 2)
        {
            return matrix[0, 0] * matrix[1, 1] - matrix[0, 1] * matrix[1, 0];
        }

        int determinant = 0;
        for (int j = 0; j < columns; j++)
        {
            determinant += matrix[0, j] * CalculateCofactorElement(matrix, 0, j) * (int)Math.Pow(-1, 0 + j);
        }

        return determinant;
    }
}
