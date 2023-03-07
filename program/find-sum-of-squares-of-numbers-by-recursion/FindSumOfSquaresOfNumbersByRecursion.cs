using System;

class sumOfSquares {
  static int Sum(int n) { 
    if(n == 1)
      return 1;
    else
      return (n*n + Sum(n-1));
  } 

  static void Main(string[] args) {
    Console.WriteLine("Sum of squares of first 5 natural numbers: " + Sum(5));
  }
}
