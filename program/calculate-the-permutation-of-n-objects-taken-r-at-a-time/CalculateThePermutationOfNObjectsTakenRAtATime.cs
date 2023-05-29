using System;

public class HelloWorld
{
    public static void Main(string[] args)
    {
       int n = Convert.ToInt32(Console.ReadLine());
       int r = Convert.ToInt32(Console.ReadLine());
       int p = factorial(n)/factorial(n-r);
    
       Console.WriteLine("The permutation is : " + p);
    }
    
    static int factorial(int num){
        if(num == 0 || num == 1) return 1;
        else return num * factorial(num-1);
    }
}
