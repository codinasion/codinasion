using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the days :");
    double days = Convert.ToDouble(Console.ReadLine());
    double hours = days * 24;
    Console.WriteLine(days+ " days are "+ hours + " hours");
  }
}
