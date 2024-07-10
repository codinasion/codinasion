using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the weeks : ");
    double weeks = Convert.ToDouble(Console.ReadLine());
    double minutes = weeks * 10080;
    Console.WriteLine(weeks+" weeks is "+minutes+" minutes");
  }
}
