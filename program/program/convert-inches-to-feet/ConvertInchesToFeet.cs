using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter inches:");
    double inches = Convert.ToDouble(Console.ReadLine());
    double feet = inches / 12;
    Console.WriteLine(inches+ " inches is "+feet + " Feet");
  }
}
