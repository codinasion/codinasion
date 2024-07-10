using System;

public class Program 
{
    public static void Main() 
    {
        Console.WriteLine(ConvertToConstantCase("Hello world!"));
    }

    public static string ConvertToConstantCase(string input) 
    {
        return input.Replace(' ', '_').ToUpper();
    }
}