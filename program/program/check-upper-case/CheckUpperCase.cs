using System;
 
public class charCase
{
    static void Main(string[] args)
    {
        char ch;
 
        Console.WriteLine("Enter any character: ");
        ch = Convert.ToChar(Console.ReadLine());        
 
        if (ch >= 'a' && ch <= 'z')
        {
            Console.WriteLine(ch + " is a lowercase alphabet ");            
        }
        else if (ch >= 'A' && ch <= 'Z')
        {
            Console.WriteLine(ch + " is a uppercase alphabet ");                      
        }
        else
        {
            Console.WriteLine(ch + " is not an alphabet ");                      
        }
 
        Console.ReadLine();
    }
}
