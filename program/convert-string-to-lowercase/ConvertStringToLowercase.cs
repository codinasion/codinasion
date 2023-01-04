using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

class Program
{
    static void Main()
    {
        String input;
        String output;

        Console.Write("Input : ");
        input = Console.ReadLine();

        output = input.ToLower();
            
        Console.WriteLine("Output : " + output);
    }
}