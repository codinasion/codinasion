using System;
using System.Globalization;

namespace DateValidation {
   class Program {
      static void Main(string[] args) {
         DateTime d;
         bool chValidity = DateTime.TryParseExact(
         "2019-02-29",
         "MM/dd/yyyy",
         CultureInfo.InvariantCulture,
         DateTimeStyles.None,
         out d);
         Console.WriteLine(chValidity);
      }
   }
}
