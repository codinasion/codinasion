using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter a number : ");
    double num = Convert.ToDouble(Console.ReadLine());
    double sqrt = Math.Sqrt(num);
    Console.WriteLine("Square root of "+num+" is : "+sqrt);
  }
}
