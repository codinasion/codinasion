using System;
namespace LargestAndSmallest
{
    class Program
    {
        public static void Main()
        {
            int n;
            float large, small;
            int[] a = new int[50];
            Console.WriteLine("Enter the size of Array");
            string s = Console.ReadLine();
            n = Int32.Parse(s);
            Console.WriteLine("Enter the array elements");
            for (int i = 0; i < n; i++)
            {
                string s1 = Console.ReadLine();
                a[i] = Int32.Parse(s1);
            }
            Console.Write("");
            large = a[0];
            small = a[0];
            for (int i = 1; i < n; i++)
            {
                if (a[i] > large)
                    large = a[i];
                else if (a[i] < small)
                    small = a[i];
            }
            Console.WriteLine("Largest element in the array is {0}", large);
            Console.WriteLine("Smallest element in the array is {0}", small);
        }
    }
 
}
