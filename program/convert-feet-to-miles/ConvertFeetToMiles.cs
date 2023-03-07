using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the feet : ");
    double feet = Convert.ToDouble(Console.ReadLine());
    double miles = Math.Round(feet / 5280, 2);
    Console.WriteLine(feet+" feet is "+miles+" miles");
  }
}
