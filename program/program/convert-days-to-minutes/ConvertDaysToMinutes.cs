using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the days : ");
    double days = Convert.ToDouble(Console.ReadLine());
    double mins = days * 1440;
    Console.WriteLine(days+" days are "+mins+" mins");
  }
}
