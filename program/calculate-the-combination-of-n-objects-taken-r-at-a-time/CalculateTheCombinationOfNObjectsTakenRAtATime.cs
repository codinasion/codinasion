using System;

public class combinationOfNObjectsTakenRAtATime
{
    public int combination(int n, int r)
    {
        int factorial(int n)
        {
            int result;
            if (n == 1)
            {
                return 1;
            }
            else
            {
                result = factorial(n - 1) * n;
                return result;
            }
        }
        int x = n - r;
        int comb = factorial(n) / (factorial(r) * factorial(x));
        return comb;
    }
    public static void Main(String[] args)
    {
        combinationOfNObjectsTakenRAtATime a = new combinationOfNObjectsTakenRAtATime();
        int n = 5;
        int r = 2;
        Console.WriteLine("Input  : {0}, {1}", n, r);
        Console.WriteLine("Output : {0}", a.combination(n, r));

    }
}