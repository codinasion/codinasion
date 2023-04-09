using System;
using System.Linq;
namespace exercise
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] nums = { 1, 2, 3 };
            Console.WriteLine("Sum of squares of elements: " + squares(nums));

        }
        public static int squares(int[] nums)
        {
            int squares_sum = 0;
            for (int i = 0; i < nums.Length; i++)
            {
                squares_sum = squares_sum + (int)Math.Pow(nums[i], 2);
            }
            return (int)squares_sum;
        }
    }
}
