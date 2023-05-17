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
}