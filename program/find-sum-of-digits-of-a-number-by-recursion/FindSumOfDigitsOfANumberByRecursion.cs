using System;
class Digits{
static int SumOfDigit(int n)
{
    if (n == 0)
        return 0;

    return(n % 10 + SumOfDigit(n / 10));
}
 
public static void Main()
{
    int n = 1234;
    int ans = SumOfDigit(n);
    Console.Write("Sum of digits : " + ans);
}
}
