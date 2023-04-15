using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the side : ");
    double side = Convert.ToDouble(Console.ReadLine());
    double perimeter = 4 * side;
    Console.WriteLine("Perimeter of square :"+perimeter);
  }
}
