using System;
public class FindSumOfCubesOfNumbersByRecursion 
{
    public int sumOfCubesOfNumbersByRecursion(int[] a, int sum, int i) {
        if (i >= a.Length)
            return sum;
        sum += (a[i] * a[i] * a[i]);
        return sumOfCubesOfNumbersByRecursion(a,sum,++i);
    }
    public static void Main(string[] args)
    {
        FindSumOfCubesOfNumbersByRecursion n = new FindSumOfCubesOfNumbersByRecursion();
        int[] a = { 1, 2, 3, 4, 5 };
        Console.Write("Input  : ");
        for (int i = 0; i < a.Length; i++) {
            Console.Write("{0} ",a[i]);
        }
        Console.WriteLine(" ");
        Console.WriteLine("Output : {0}", n.sumOfCubesOfNumbersByRecursion(a,0,0));
    }
}