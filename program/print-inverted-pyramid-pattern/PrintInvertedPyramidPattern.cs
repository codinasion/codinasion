using System;
namespace Pattern
{
    public class InvertedPyramid
    {
        public static void Main()
        {
            Console.Write("Enter Number of Rows :");
            int rows = Convert.ToInt32(Console.ReadLine());
            for (int i = rows; i >= 1; i--)
            {
                for (int j = 1; j <= i; j++)
                {
                    Console.Write(j + " ");
                }
                Console.WriteLine();
            }
            Console.ReadLine();
        }
    }
}
