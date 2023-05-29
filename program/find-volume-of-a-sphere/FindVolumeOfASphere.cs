using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Enter the radius : ");
    double radius = Convert.ToDouble(Console.ReadLine());
    double volume = 4/3 * 3.14 * radius * radius * radius;
    Console.WriteLine("Volume of sphere : "+volume);
  }
}
