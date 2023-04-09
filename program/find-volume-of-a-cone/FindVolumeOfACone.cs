using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the radius : ");
    double radius = Convert.ToDouble(Console.ReadLine());
    Console.WriteLine ("Please enter the height : ");
    double height = Convert.ToDouble(Console.ReadLine());
    double cone = 1 * radius * radius * height;
    Console.WriteLine("Volume of cone :"+cone);
  }
}
