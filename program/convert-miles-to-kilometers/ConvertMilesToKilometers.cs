using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the miles : ");
    double miles = Convert.ToDouble(Console.ReadLine());
    double km = miles * 1.60;
    Console.WriteLine(miles+" miles is "+km+" kilometres");
  }
}
