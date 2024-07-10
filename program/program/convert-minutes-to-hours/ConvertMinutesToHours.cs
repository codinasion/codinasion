using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the minutes : ");
    double minutes = Convert.ToDouble(Console.ReadLine());
    double hours = minutes / 60;
    Console.WriteLine(minutes+" minutes is "+hours+" hours");
  }
}
