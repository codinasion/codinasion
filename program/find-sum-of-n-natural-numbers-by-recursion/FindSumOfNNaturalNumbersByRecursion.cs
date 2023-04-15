using System;
class SumOfNaturalNumbers
{
static void Main(string[] args) 
    {
	Console.Write(" How many numbers to sum : ");
	int n = Convert.ToInt32(Console.ReadLine());    
    Console.Write(" The sum of natural numbers is : {1}\n\n", n,SumOfTen(1,n));
    }

static int SumOfTen(int min, int max) 
    {
    return CalcuSum(min, max);
    }

static int CalcuSum(int min, int val) 
    {
    if (val == min)
        return val;
    return val + CalcuSum(min, val - 1);
    }
}
