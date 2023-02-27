using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the seconds : ");
    double seconds = Convert.ToDouble(Console.ReadLine());
    double minutes = seconds / 60;
    Console.WriteLine(seconds+" seconds is "+minutes+" minutes");
  }
}
