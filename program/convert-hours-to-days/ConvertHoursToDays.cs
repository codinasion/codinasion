using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the hours : ");
    double hours = Convert.ToDouble(Console.ReadLine());
    double days = hours / 24;
    Console.WriteLine(hours+" hours is "+days+" days");
  }
}
