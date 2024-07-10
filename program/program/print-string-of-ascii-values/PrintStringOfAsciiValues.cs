using System;

public class PrintStringOfAsciiValues
{
    public static void Main()
    {
        //Prompts user to enter ASCII values separated by spaces
        Console.WriteLine("Enter the ASCII values separated by spaces:");

        //Reads user input
        string input = Console.ReadLine();

        //Splits input into an array of ASCII values
        string[] asciiValues = input.Split(' ');

        //Iterates over each ASCII value in the array
        foreach (string asciiValue in asciiValues)
        {
            //Tries to parse the ASCII value as an integer
            int value;
            if (int.TryParse(asciiValue, out value))
            {
                //Converts the integer value to its corresponding character
                char character = (char)value;

                //Prints the character
                Console.Write(character);
            }
        }

        //Prints a new line after printing the characters
        Console.WriteLine();
    }
}
