using System;
class Demo {
   public static void Main() {
      int decVal, quot, i = 1, j;
      int[] octalVal = new int[80];
      decVal = 10;
      quot = decVal;
      Console.WriteLine("Enter a Decimal Number:{0}",decVal);
      while (quot!= 0) {
         octalVal[i++] = quot % 8;
         quot = quot / 8;
      }
      Console.Write("Equivalent Octal Number: ");
      for (j = i - 1; j > 0; j--)
         Console.Write(octalVal[j]);
         Console.Read();
   }
}
