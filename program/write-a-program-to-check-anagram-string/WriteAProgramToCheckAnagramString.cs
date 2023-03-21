using System;
 
public class Anagram {
   public static void Main () {
      string str1 = "pan";
      string str2 =  "nap";
      char[] ch1 = str1.ToLower().ToCharArray();  
      char[] ch2 = str2.ToLower().ToCharArray();  
      Array.Sort(ch1);  
      Array.Sort(ch2);  
      string val1 = new string(ch1);  
      string val2 = new string(ch2);  
      if (val1 == val2) {  
         Console.WriteLine("Anagram Strings");  
      } else {  
         Console.WriteLine("Not an Anagram Strings");  
      }  
   }
}
