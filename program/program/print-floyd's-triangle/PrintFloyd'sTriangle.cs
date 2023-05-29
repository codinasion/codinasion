using System;

namespace FloydsTriangle
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter the number of rows:\t");
            int row = int.Parse(Console.ReadLine());
            int i, j, value = 1; 
            for (i = 1; i <= row; i++) 
            { 
                for (j = 1; j <= i; j++) 
                { 
                    Console.Write(value + " "); 
                    value++; 
                } 
                Console.WriteLine();
            }
        }
    }
}
