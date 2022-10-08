using System;
using System.Collections.Generic;
using System.Text;
namespace Demo {
   class MyApplication {
      static void Main(string[] args) {
         int num, binVal, decVal = 0, baseVal = 1, rem;
         num = 110011;
         binVal = num;
         while (num > 0) {
            rem = num % 10;
            decVal = decVal + rem * baseVal;
            num = num / 10 ;
            baseVal = baseVal * 2;
         }
         Console.Write("Binary Number: "+binVal);
         Console.Write("\nDecimal: "+decVal);
         Console.ReadLine();
      }
   }
}
