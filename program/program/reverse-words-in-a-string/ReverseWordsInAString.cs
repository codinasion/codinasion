using System;

class Program
{
    static string ReverseWords(string inputString)
    {
        // Split the input string into an array of words
        string[] wordsArray = inputString.Split(' ');

        // Reverse the array of words
        Array.Reverse(wordsArray);

        // Join the reversed array of words to form the reversed string
        string reversedString = string.Join(" ", wordsArray);

        return reversedString;
    }

    static void Main()
    {
        string inputString = "Hello World";
        string output = ReverseWords(inputString);

        Console.WriteLine($"Input : \"{inputString}\"");
        Console.WriteLine($"Output: \"{output}\"");
    }
}
