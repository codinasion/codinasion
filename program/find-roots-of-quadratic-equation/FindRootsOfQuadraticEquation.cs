using System;
public class FindRootsOfQuadraticEquation
{
    static (double, double) quadraticEquation(int a, int b, int c)
    {
        double result1;
        double result2;
        double root = Math.Sqrt((b * b) - (4 * a * c));
        result1 = (-b + root) / 2 * a;
        result2 = (-b - root) / 2 * a;
        return (result1, result2);
    }
    public static void Main(string[] args)
    {
        int a = 1; int b = 2; int c = 1;
        Console.WriteLine("Input  :  {0} {1} {2}", a, b, c);
        Console.WriteLine("Output : {0}", quadraticEquation(a, b, c));
    }
}