using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the paisa value : ");
    double paisa = Convert.ToDouble(Console.ReadLine());
    double rupees = paisa / 100 ;
    Console.WriteLine(paisa+" paisa is "+rupees+" rupees");
  }
}
