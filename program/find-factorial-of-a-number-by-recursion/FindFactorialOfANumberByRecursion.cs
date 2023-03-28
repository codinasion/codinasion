using System;
class Factorial
{
    public static void Main()
    {
        int fact, num;
        Console.Write("Enter a number: ");
        num = Convert.ToInt32(Console.ReadLine());
        Factorial obj = new Factorial();
        fact = obj.factorial(num);
        Console.WriteLine("Factorial of {0} is {1}", num, fact);
    }

    public int factorial(int num)
    {
        if (num == 0)
            return 1;
        else
            return num * factorial(num - 1);
    }
}
