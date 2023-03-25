using System;
using System.Linq;
using System.Collections.Generic;
public class SumOfCubes {
   public static void Main() {
      List<int> list = new List<int> { 1, 2, 3, 4, 5 };
      IEnumerable<int> res = list.AsQueryable().Select(c => c * c * c);
      Console.WriteLine("Sum of cubes of numbers : ");
      int result = 0;
      foreach (int n in res)
      result += n;
      Console.WriteLine(result);
   }
}
