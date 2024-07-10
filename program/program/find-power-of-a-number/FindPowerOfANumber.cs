using System;
namespace FindPowerOfANumber{
    class PowerOfANumber{
        static void Main(string[] args){
            Console.WriteLine("Enter the base number");
            int baseNum = int.Parse(Console.ReadLine());
            Console.WriteLine("Enter the power number");
            int powerNum = int.Parse(Console.ReadLine());
            Console.WriteLine(Math.Pow(baseNum, powerNum));
        }
    }
}