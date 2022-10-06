namespace HackToberFest;

public class FibonacciSeriesWithoutRecursion
{
    public static List<int> Get(int n)
    {
        int first = 0;
        int second = 1;
        int fib = first + second;
        var fibNumbers = new List<int>();
        fibNumbers.Add(0); // adding 0 as it is the first fibonacci number

        for (int i = 1; i < n; i++)
        {
            fibNumbers.Add(fib);
            fib = first + second;
            first = second;
            second = fib;
        }

        return fibNumbers;
    }
    
    public static void Print(int n)
    {
        var fibNumbers = FibonacciSeriesWithoutRecursion.Get(n);
        foreach (var fibNumber in fibNumbers)
        {
            Console.Write(fibNumber + " ");
        }
    }
}