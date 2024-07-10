using System;

public class Program{
    public static void Main()
    {
        Console.Write("Enter text: ");
        string input = Console.ReadLine();

        Console.WriteLine(input.ToLower().Replace(" ", "_"));
    }
}
