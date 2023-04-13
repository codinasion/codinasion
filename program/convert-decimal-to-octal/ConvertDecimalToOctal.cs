using System;
class DecimalToOctal {
   public static void Main() {
      int decVal, quot, i = 1, j;
      int[] octalVal = new int[80];
      Console.WriteLine("Enter a Decimal Number: ");
      decVal = Convert.ToInt32(Console.ReadLine());
      quot = decVal;
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
