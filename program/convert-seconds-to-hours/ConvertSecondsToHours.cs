using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the seconds : ");
    double seconds = Convert.ToDouble(Console.ReadLine());
    double hours = seconds / 3600;
    Console.WriteLine(seconds+" seconds is "+hours+" hours");
  }
}
