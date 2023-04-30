using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
 
namespace Program
{
    class Program
    {
        public static void Main(string[] args)
        {
            int m, n, i, j;
            Console.Write("Enter the order of the Matrix : ");
            m = Convert.ToInt16(Console.ReadLine());
            n = Convert.ToInt16(Console.ReadLine());
            int[,] A = new int[10, 10];
            Console.Write("\nEnter The Matrix Elements : ");
            for (i = 0; i < m; i++)
            {
                for (j = 0; j < n; j++)
                {
                    A[i, j] = Convert.ToInt16(Console.ReadLine());
                }
            }
            Console.Clear();
            Console.WriteLine("\nGiven Matrix : ");
            for (i = 0; i < m; i++)
            {
                for (j = 0; j < n; j++)
                {
                    Console.Write(A[i, j] + "\t");
 
                }
                Console.WriteLine();
            }
            Console.WriteLine("Transpose Matrix : ");
 
           for (i = 0; i < m; i++)
            {
                for (j = 0; j < n; j++)
                {
                    Console.Write(A[j, i] + "\t");
 
                }
                Console.WriteLine();
            }
            Console.Read();
        }
    }
}
