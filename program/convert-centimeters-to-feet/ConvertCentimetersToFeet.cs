using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the centimeter : ");
    double centimeter = Convert.ToDouble(Console.ReadLine());
    double feet = centimeter / 30.48;
    Console.WriteLine(+centimeter+" centimeter is "+feet+" feet");
  }
}
