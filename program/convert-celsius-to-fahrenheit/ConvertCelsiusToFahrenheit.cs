using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the celcius : ");
    double celsius = Convert.ToDouble(Console.ReadLine());
    double fahrerheit = (celsius * 9/5) + 32;
    Console.WriteLine(+celsius+" celsius is "+fahrerheit+" fahrerheit");
  }
}
