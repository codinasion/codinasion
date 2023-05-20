using System;

public class HelloWorld
{
    public static void Main(string[] args)
    {
        Console.Write("Enter ASCII value : ");
        int input = Convert.ToInt32(Console.ReadLine());
        Console.Write("The character is : ");
        Console.Write(Convert.ToChar(input));
    }
}
