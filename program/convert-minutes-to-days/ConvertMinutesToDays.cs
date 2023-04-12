using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the minutes :");
    double mins = Convert.ToDouble(Console.ReadLine());
    double days = mins / 1440;
    Console.WriteLine(mins + " minutes is "+ days + " days");
  }
}
