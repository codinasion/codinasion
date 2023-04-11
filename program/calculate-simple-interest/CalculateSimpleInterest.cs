using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the principal :");
    double inches = Convert.ToDouble(Console.ReadLine());
    Console.WriteLine ("Please enter the rate of interest :");
    double interest = Convert.ToDouble(Console.ReadLine());
    Console.WriteLine ("Please enter the time :");
    double time = Convert.ToDouble(Console.ReadLine());
    double simpleInterest = (principal *  interest * time ) / 100;
    Console.WriteLine("Simple Interest : "+ simpleInterest);
  }
}
