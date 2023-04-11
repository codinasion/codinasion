using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the inches : ");
    double inches = Convert.ToDouble(Console.ReadLine());
    double centimeter = inches * 2.54;
    Console.WriteLine(inches+" inches is "+centimeter+" centimeter");
  }
}
