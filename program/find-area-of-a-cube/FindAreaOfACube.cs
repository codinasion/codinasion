using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the side : ");
    double side = Convert.ToDouble(Console.ReadLine());
    double cube = 6 * side * side;
    Console.WriteLine("Area of cube : "+cube);
  }
}
