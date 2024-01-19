using System;

namespace Test
{
    internal class Program
    {
        /*
                Input data:
                key
                array size
                array data
            */
        public static void Main(string[] args)
        {
            int key = Convert.ToInt32(Console.ReadLine());
            int size = Convert.ToInt32(Console.ReadLine());
            int[] arr = new int[size];
            
            for(int i = 0; i < size; ++i)
            {
                arr[i] = Convert.ToInt32(Console.ReadLine());
            }

            int res = LinearSearch(arr, key);

            if (res != -1)
            {
                Console.WriteLine($"Element found with index {res}");
            }
            else
            {
                Console.WriteLine("Element does not exist");
            }
        }

        public static int LinearSearch(int[] arr, int key)
        {
            for(int i = 0; i < arr.Length; ++i )
            {
                if (arr[i] == key)
                {
                    return i;
                }
            }

            return -1;
        }
    }
}

