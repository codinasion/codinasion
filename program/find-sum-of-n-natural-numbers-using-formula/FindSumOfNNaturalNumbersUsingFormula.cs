using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Enter a number:");
    double n = Convert.ToDouble(Console.ReadLine());
    double result = n * (n+1)/2;
    Console.WriteLine("Sum of natural numbers : "+result);
  }
}
