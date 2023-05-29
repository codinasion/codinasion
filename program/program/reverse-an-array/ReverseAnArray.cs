using System;
 
public class Reverse
{
    public static void Main()
    {
        int[] array = { 1, 2, 3, 4, 5 };
        Array.Reverse(array);
 
        Console.WriteLine(String.Join(',', array));
    }
}
