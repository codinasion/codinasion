using System;
using System.Linq;
namespace StringCheck
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(lowerCase("a"));
        }
        public static bool lowerCase(string str1)
        {
           return str1 == str1.ToLower();
        }
    }
}
