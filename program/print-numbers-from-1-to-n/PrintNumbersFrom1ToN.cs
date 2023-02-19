using System;

class Program
{
    static void Main(string[] args)
    {
        Console.Write("Input the value for N: ");
        int n = int.Parse(Console.ReadLine());

        Console.WriteLine("Output:");
        for (int x = 1; x <= n; x++)
        {
            Console.Write(x + ", ");
        }
    }
}
