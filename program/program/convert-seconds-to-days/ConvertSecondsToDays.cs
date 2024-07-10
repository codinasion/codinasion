using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the seconds : ");
    double seconds = Convert.ToDouble(Console.ReadLine());
    double days = seconds / 86400;
    Console.WriteLine(seconds+" seconds is "+days+" days");
  }
}
