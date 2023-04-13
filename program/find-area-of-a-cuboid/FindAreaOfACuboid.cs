using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the length : ");
    double length = Convert.ToDouble(Console.ReadLine());
    Console.WriteLine ("Please enter the width : ");
    double width = Convert.ToDouble(Console.ReadLine());
    Console.WriteLine ("Please enter the height : ");
    double height = Convert.ToDouble(Console.ReadLine());
    double cuboid = 2 * ((length * width) + (length * height) + (width * height));
    Console.WriteLine("Area of cuboid :"+cuboid);
  }
}
