using System;

public class squareroot
    {
        public static void Main(String[] args)
        {
          Console.WriteLine("Enter a Number : ");
          double input = Convert.ToDouble(Console.ReadLine());
          double result = Math.Sqrt(input);
          
          Console.WriteLine("Input: " + input);
          Console.WriteLine("Square root of " + input + " is: " + result);
              
        }
    }
