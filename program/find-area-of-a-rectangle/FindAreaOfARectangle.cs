using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the length : ");
    double length = Convert.ToDouble(Console.ReadLine());
    Console.WriteLine ("Please enter the width : ");
    double width = Convert.ToDouble(Console.ReadLine());
    double area = length * width;
    Console.WriteLine("Area of rectangle :"+area);
  }
}
