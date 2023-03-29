using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the days : ");
    double days = Convert.ToDouble(Console.ReadLine());
    double weeks = days / 7;
    Console.WriteLine(days+" days is "+weeks+" weeks");
  }
}
