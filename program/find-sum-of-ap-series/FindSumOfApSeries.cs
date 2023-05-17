using System;

public class FindSumOfApSeries
{
    /// <summary>
    /// Finds the sum of the AP serie at the n-th term
    /// </summary>
    /// <param name="a">First term</param>
    /// <param name="n">Position of the term (starts at 1)</param>
    /// <param name="d">Constant difference between terms</param>
    /// <returns>The sum of an arithmetic sequence at the n-th term</returns>
    public static int sumOfApSeries(int a, int n, int d)
    {
        int n_th_term = a + ((n - 1) * d);
        return n * ((a + n_th_term) / 2);
    }

    public static void Main()
    {
        int firstTerm, n, d;
        Console.WriteLine("Enter the first term : ");
        firstTerm = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("Enter the position of the wanted sum (n value) : ");
        n = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("Enter the constant between each term : ");
        d = Convert.ToInt32(Console.ReadLine());
        
        Console.WriteLine(sumOfApSeries(firstTerm,n,d));
    }
}