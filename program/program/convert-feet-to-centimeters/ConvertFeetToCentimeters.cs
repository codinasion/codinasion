using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the feet : ");
    double feet = Convert.ToDouble(Console.ReadLine());
    double centimeter = feet * 30.48;
    Console.WriteLine(feet+" feet is "+centimeter+" centimeter");
  }
}
