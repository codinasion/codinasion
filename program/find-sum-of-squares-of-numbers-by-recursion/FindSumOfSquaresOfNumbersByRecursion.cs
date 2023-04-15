using System;

class sumOfSquares {
  static int Sum(int n) { 
    if(n == 1)
      return 1;
    else
      return (n*n + Sum(n-1));
  } 

  static void Main(string[] args) {
    string n;int res;
    Console.WriteLine("Enter a Number: ");
    n = Console.ReadLine();
    res=Convert.ToInt32(n);
    Console.WriteLine("Sum of squares of first "+res+" natural numbers: " + Sum(res));
  }
}
