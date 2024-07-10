using System;
using System.Linq;
class Average {
   static void Main() {
      var arr = new int[] { 1,2,3,4,5 };
      double avg = Queryable.Average(arr.AsQueryable());  
      Console.WriteLine("Average : "+avg);
   }
}
