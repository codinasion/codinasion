using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
class matrix
{
        int[,]x;
        matrix()
        {
            x = new int[,] { { 4, 7, 3 }, { 9, 4, 2 }, { 0, 6, 4 } };
        }
        void printarray()
        {
            Console.WriteLine("Elements in the given Matrix : ");
            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    Console.Write(x[i, j] + "\t");
                }
                Console.WriteLine("\n");
            } 
        }
        int max()
        {
            int small = x[0, 0];
            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    if (small > x[i, j])
                    {
                        small = x[i, j];
                    }
                }
            }
            return small;
        }
        public static void Main()
        {
            matrix obj = new matrix();
            obj.printarray();
            Console.WriteLine("Smallest Element in the Matrix : {0}", obj.max());
            Console.ReadLine();
        }
 }
