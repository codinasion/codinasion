using System;
public class GFG {
 
static public void Main()
  {
 Console.WriteLine("Enter a String : ");

 string str = Console.ReadLine();
    string x = "";
    for (int i = 0; i < str.Length; i++) {
      char ch = str[i];
      if (Char.IsUpper(ch)) {
        x += Char.ToLower(ch);
      }
      else {
        x += Char.ToUpper(ch);
      }
    }
    Console.WriteLine("Reversecase of given String : "+x);
  }
}
