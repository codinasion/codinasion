using System;  
public class Program
{
    public static void Main(string[] args)
    {
        reverse(123);
    }

    public static int reverted=0;

    public static void reverse(int number)
    {
        if (number!=0)
        {
            int remainder = number % 10;
            reverted = (reverted*10)+remainder;
            reverse(number/10);
        } 
        else
            Console.WriteLine(reverted);
    }
}
