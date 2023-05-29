using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the feet:");
    double feet = Convert.ToDouble(Console.ReadLine());
    double inches = feet * 12;
    Console.WriteLine(feet + " feet is "+ inches + " inches");
  }
}
