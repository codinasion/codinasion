// // Input some string
// String value = Console.ReadLine("Enter text: ");

// // Converts the whole string to lowercase & replaces the spaces with underscore
// Console.WriteLine(value.Replace(" ", "_"));
using System;

public class Program{

    public static void Main()
    {
        Console.Write("Enter text: ");
        string input = Console.ReadLine();

        Console.WriteLine(input.ToLower().Replace(" ", "_"));
    }
}

