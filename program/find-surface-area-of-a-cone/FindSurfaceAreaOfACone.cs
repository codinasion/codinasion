using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the radius :");
    double radius = Convert.ToDouble(Console.ReadLine());
    Console.WriteLine ("Please enter the height :");
    double height = Convert.ToDouble(Console.ReadLine());
    double surfaceArea = 3.14 * radius *  (radius + height ) ;
    Console.WriteLine("Surface area of cone : "+ surfaceArea);
  }
}
