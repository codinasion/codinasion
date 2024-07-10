using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the pounds : ");
    double pounds = Convert.ToDouble(Console.ReadLine());
    double kg = pounds * 0.453592 ;
    Console.WriteLine(pounds+" pounds is "+kg+" kilograms");
  }
}
