using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the miles : ");
    double miles = Convert.ToDouble(Console.ReadLine());
    double feet = miles * 5280;
    Console.WriteLine(miles+" miles is "+feet+" feet");
  }
}
