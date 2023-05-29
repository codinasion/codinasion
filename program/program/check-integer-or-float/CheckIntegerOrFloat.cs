using System;
namespace NumCheck
{
    class Program
    {
        static void Main(string[] args)
        {
            int n;
            double d;
            Console.Write("Enter any number : ");
            d = double.Parse(Console.ReadLine());
            n = (int) d;
            if (n == d)
            {
                Console.WriteLine("Number is Integer");
            }
            else
            {
                Console.WriteLine("Number is Float");
            }
            Console.ReadLine();
        }
    }
}
