using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the number of Year : ");
    double year = Convert.ToDouble(Console.ReadLine());
    double weekends = year * 104;
    Console.WriteLine(year+" year has "+weekends+" weekends");
  }
}
