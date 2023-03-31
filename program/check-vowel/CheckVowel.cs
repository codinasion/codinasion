using System;
 
public class vowelChar
{
    static void Main(string[] args)
    {
        char ch;
 
        Console.WriteLine("Enter any character: ");
        ch = Convert.ToChar(Console.ReadLine());
 
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
        {
            Console.WriteLine(ch + " is a Vowel.");
        }
        else 
        {
            Console.WriteLine(ch + " is not a Vowel.");            
        }
    }
}
