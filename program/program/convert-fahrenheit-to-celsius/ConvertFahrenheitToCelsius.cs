using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the fahrenheit : ");
    double fahrenheit = Convert.ToDouble(Console.ReadLine());
    double celcius =  (fahrenheit - 32) * 5/9;
    Console.WriteLine(fahrenheit+" fahrenheit is "+celcius+" celcius");
  }
}
