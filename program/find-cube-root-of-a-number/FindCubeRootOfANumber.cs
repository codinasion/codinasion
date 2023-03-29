using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter a number : ");
    double num = Convert.ToDouble(Console.ReadLine());
    double cubeRoot = Math.Cbrt(num);
    Console.WriteLine("Cube root of given number : "+cubeRoot);
  }
}
