using System;  
namespace Uppercase {  
  class Uppercase {
    public static void Main(string [] args) {
     Console.WriteLine ("Please enter a string : ");
      //string str = "chocolate";
     string str = Console.ReadLine();
      string result = str.ToUpper();
      Console.WriteLine("Uppercase of the given string: "+result);   
 
      Console.ReadLine();    
    }
  } 
}
