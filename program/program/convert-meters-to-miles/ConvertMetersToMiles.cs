using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the meter value :");
    double meter = Convert.ToDouble(Console.ReadLine());
    double miles =  Math.Round(meter/1609, 2);
    Console.WriteLine(meter+" meter is "+ miles+" miles");
  }
}
