using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the seconds : ");
    double seconds = Convert.ToDouble(Console.ReadLine());
    double weeks = seconds / 604800;
    Console.WriteLine(seconds+" seconds is "+weeks+" weeks");
  }
}
