using System;

public class CheckDigit
{  
    public static void Main(string[] args)  
    {  
        Console.Write("Enter the character: ");
        var c = Console.ReadLine();
        var isDigit = int.TryParse(c, out var value) && (0 <= value) && (9 >= value);
        Console.WriteLine(isDigit ? "Entered character is a digit" : "Entered character is not a digit");
    }  
}  