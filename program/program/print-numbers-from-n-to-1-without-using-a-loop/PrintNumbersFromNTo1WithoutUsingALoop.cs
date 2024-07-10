using System;

class MainClass {
    public static void Main (string[] args) {
     int i = 5;
     i = i+1;
     begin: 
     i = i - 1; 
     Console.Write(" " + i + " "); 
     if (i > 1) 
     { 
     goto begin; 
     } 
  }
}
