using System;
namespace Demo {
   public class Program {
      public static void Main(string[] args) {
         DateTime d = DateTime.Parse("12:05:45 PM");
         Console.WriteLine(d.ToString("HH:mm"));
      }
   }
}
