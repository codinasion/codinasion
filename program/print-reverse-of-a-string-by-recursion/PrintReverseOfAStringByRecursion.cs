using System;

public class ReverseStringRecursion
{
    public static string ReverseString(string str)
        {
            if ((str == null) || (str.Length <= 1))
                return str;
            return ReverseString(str.Substring(1)) + str[0];
        }
    public static void Main(string[] args)
    {
        string myStr="Hello World";
            string reversed = ReverseString(myStr);
 
            Console.WriteLine("Original String: " + myStr);
            Console.WriteLine("Reversed String: " + reversed);
            Console.ReadLine();
    }
}
