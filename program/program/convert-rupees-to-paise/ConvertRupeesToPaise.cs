using System;

class MainClass {
  public static void Main (string[] args) {
    Console.WriteLine("Enter price in rupees:");
    int rupees = Convert.ToInt32(Console.ReadLine());
    int paise = rupees * 100;
    Console.WriteLine(rupees + " rupees = " + paise + " paise");
  }
}