using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the hours : ");
    double hours = Convert.ToDouble(Console.ReadLine());
    double seconds = hours * 3600;
    Console.WriteLine(hours+" hours is "+seconds+" seconds");
  }
}
