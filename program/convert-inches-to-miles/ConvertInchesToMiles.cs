using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the inches : ");
    double inches = Convert.ToDouble(Console.ReadLine());
    double miles = inches / 63360;
    Console.WriteLine(inches+" inches is "+miles+" miles");
  }
}
