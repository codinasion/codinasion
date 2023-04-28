using System;

namespace MatrixInverse
{
    class Program
    {
        static void Main(string[] args)
        {
            int[,] matrix = new int[3, 3];
            Console.WriteLine("Enter the elements of the matrix:");

            // Read matrix elements from user input
            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    matrix[i, j] = int.Parse(Console.ReadLine());
                }
            }

            // Initialize determinant
            float d = 0;

            // Finding determinant of the matrix
            for (int i = 0; i < 3; i++)
            {
                d = d + (matrix[0, i] * (matrix[1, (i + 1) % 3] * matrix[2, (i + 2) % 3] - matrix[1, (i + 2) % 3] * matrix[2, (i + 1) % 3]));
            }

            if (d > 0)
            {
                Console.WriteLine("Inverse of this matrix is:");

                // Finding adjoint and dividing it by determinant
                for (int i = 0; i < 3; i++)
                {
                    for (int j = 0; j < 3; j++)
                    {
                        Console.Write(((matrix[(j + 1) % 3, (i + 1) % 3] * matrix[(j + 2) % 3, (i + 2) % 3]) - (matrix[(j + 1) % 3, (i + 2) % 3] * matrix[(j + 2) % 3, (i + 1) % 3])) / d + "\t");
                    }
                    Console.WriteLine();
                }
            }
            else
            {
                Console.WriteLine("Inverse does not exist for this matrix");
            }
        }
    }
}
