using System;
public class SumOfArray
{
    public static void Main()
    {
        int[] array = { 1, 2, 3, 4, 5 };
        int sum = 0;
        Array.ForEach(array, i => sum += i);
        Console.WriteLine(sum);
    }
}
