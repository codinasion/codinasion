using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the base : ");
    double baseval = Convert.ToDouble(Console.ReadLine());
    Console.WriteLine ("Please enter the height : ");
    double height = Convert.ToDouble(Console.ReadLine());
    double area = 0.5 * baseval * height;
    Console.WriteLine("Area of right angled triangle : "+area);
  }
}
