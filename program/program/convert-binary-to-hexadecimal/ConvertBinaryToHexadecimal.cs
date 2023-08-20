using System;


namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter a binary number: ");
            string BinaryInput = Console.ReadLine();
            try {
                int DecimalNumber = Convert.ToInt32(BinaryInput, 2);
                string hexNumber = DecimalNumber.ToString("X");
                Console.WriteLine($"Hexadecimal representation: {hexNumber}");
                Console.ReadLine();
            } catch {
                Console.WriteLine("Invalid binary number.");
                Console.ReadLine();
            }
        }
    }
}
