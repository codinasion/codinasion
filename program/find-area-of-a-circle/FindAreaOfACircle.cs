using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the radius : ");
    double radius = Convert.ToDouble(Console.ReadLine());
    double area = 3.14 * (radius * radius);
    Console.WriteLine("Area of Circle :"+area);
  }
}
