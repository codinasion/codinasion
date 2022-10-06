namespace HackToberFest;

public class FibonacciSeriesByRecursion
{
    private static int Get(int n)
    {
        if (n == 0 || n == 1)
        {
            return n;
        }

        return (Get(n - 1) + Get(n - 2));
    }

    public static void Print(int n)
    {
        for (int i = 0; i < n; i++)
        {
            Console.WriteLine(Get(i));
        }
    }
}