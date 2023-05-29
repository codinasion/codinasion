using System;
  
class CheckAlphabet {
  
    static public void Main()
    {
        Console.WriteLine("Input a character: ");
        char ch = (char)Console.Read();
        
        if (Char.IsLetter(ch)) {
             Console.WriteLine(ch + " is an alphabet");
        } else {
             Console.WriteLine(ch + " is not an alphabet");
        }
     
    }
}