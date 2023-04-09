using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the weeks:");
    double weeks = Convert.ToDouble(Console.ReadLine());
    double days = weeks * 7;
    Console.WriteLine(weeks + " weeks is "+ days + " days");
  }
}
