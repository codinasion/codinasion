using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the hexadecimal value : ");
    var value = Console.ReadLine();
    value = Convert.ToString(Convert.ToInt32(value.ToString(), 16), 2);
    Console.WriteLine("Binary equivalent value :"+value);
  }
}
