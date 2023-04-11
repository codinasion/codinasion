using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the miles : ");
    double miles = Convert.ToDouble(Console.ReadLine());
    double meters = miles * 1609;
    Console.WriteLine(miles+" miles is "+meters+" meters");
  }
}
