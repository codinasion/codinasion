using System;
using System.Collections.Generic;
public class HexaToDecimal {
 public static void Main() {
     string hexval = "A";
     Console.WriteLine("Hexadecimal number: "+hexval);
     int decValue = int.Parse(hexval, System.Globalization.NumberStyles.HexNumber);
     Console.WriteLine("Equivalent Decimal number: "+decValue);
   }
}
