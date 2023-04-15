using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the minutes : ");
    double minutes = Convert.ToDouble(Console.ReadLine());
    double weeks = minutes/10080;
    Console.WriteLine(minutes+" minutes is "+weeks+" weeks");
  }
}
