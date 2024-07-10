using System;
using System.Text.RegularExpressions;

public class KebabCase
{
    public static void Main()
    {
        //Prompts user to enter a string
        Console.WriteLine("Please enter a string: ");

        //Reads user input
        string input = Console.ReadLine();

        //Regular expression pattern to match non-alphanumeric characters
        string pattern = "[^a-zA-Z0-9]+";

        //Replacement string for non-alphanumeric characters
        string replacement = "-";

        //Converts input string to kebab case
        string kebabCase = Regex.Replace(input, pattern, replacement).ToLower();

        //Prints kebab case string
        Console.WriteLine(kebabCase);
    }
}