using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the kilometer : ");
    double km = Convert.ToDouble(Console.ReadLine());
    double miles = km/1.609;
    Console.WriteLine(km+" kilometer is "+miles+" miles");
  }
}
