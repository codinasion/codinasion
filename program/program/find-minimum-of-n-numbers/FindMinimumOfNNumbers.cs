using System;

public class FindMinimumOfNNumbers {
    public static void Main(String[] args){
        int[] arr = { 10, 20, 30, 40, 50 };
        Console.Write("Input  : ");
        for (int i = 0; i < 5; i++)
        {
            Console.Write(arr[i] + " ");
        }
        int min = arr[0];
        for (int i = 0; i < 5; i++)
        {
            if (arr[i] < min)
            {
                min = arr[i];
            }
        }
        Console.WriteLine();
        Console.WriteLine("Output : " + min);
    }
}

