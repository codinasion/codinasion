using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
 
public class compoundInterest
{
    static void Main(string[] args)
    {
        float amount, rate, intrest, time, ci, a;
        Console.Write("Enter the principal amount : ");
        amount = Convert.ToInt32(Console.ReadLine());       
 
        Console.Write("Enter the interest rate : ");
        rate = Convert.ToInt32(Console.ReadLine());
 
        Console.Write("Enter the period in years: ");
        time = Convert.ToInt32(Console.ReadLine());        
 
         intrest = 1+(rate/100);
         ci = 1;
         for(a = 1; a <= time; a++)
            ci = ci * intrest;
 
         ci = amount * ci - amount;
 
         Console.WriteLine("Your compound interest is : "+ ci);
 
    }
}
