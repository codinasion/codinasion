
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Eigenvalues
{
    class Program
    {
        static void Main(string[] args)
        {
            int[,] matrix = new int[3, 3];
            int i, j;
            Console.WriteLine("Enter the 9 elements of the matrix: ");
            for (i = 0; i < 3; i++)
            {
                for (j = 0; j < 3; j++)
                {
                    matrix[i, j] = Convert.ToInt32(Console.ReadLine());
                }
            }
            Console.WriteLine("The matrix is: ");
            for (i = 0; i < 3; i++)
            {
                Console.WriteLine();
                for (j = 0; j < 3; j++)
                {
                    Console.Write("\t" + matrix[i, j]);
                }
            }
            Console.WriteLine("\nThe eigenvalues of the matrix are: ");
            for (i = 0; i < 3; i++)
            {
                Console.WriteLine((matrix[0, 0] + matrix[1, 1] + matrix[2, 2]) - (matrix[0, i] + matrix[1, i] + matrix[2, i]));
            }
            Console.ReadLine();
        }
    }
}
