using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter a String:");
    string str = Console.ReadLine();
    string x = "";
    for (int i = 0; i < str.Length; i++) {
      char ch = str[i];
      if (i%2 == 0) {
        x += Char.ToLower(ch);
      }
      else {
        x += Char.ToUpper(ch);
      }
    }
    Console.WriteLine("Alternating Case :"+x);
  }
}
