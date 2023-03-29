using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the hours : ");
    double hours = Convert.ToDouble(Console.ReadLine());
    double weeks = hours / 168;
    Console.WriteLine(hours+" hours are "+weeks+" weeks");
  }
}
