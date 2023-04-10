using System;

public class FibonacciSeries {
    public static int fibonacciSeries(int n)
    {
        if (n == 0) return 0;   
        if (n == 1) return 1; 
        return fibonacciSeries(n - 1) + fibonacciSeries(n - 2);
    }
    public static void Main()
    {
        Console.Write("Input: ");
        int n = Convert.ToInt32(Console.ReadLine());
        Console.Write("Output: ");
        for (int i = 0; i < n; i++)
        {
            Console.Write("{0} ", fibonacciSeries(i));
        }
       
    }
       


    
}
