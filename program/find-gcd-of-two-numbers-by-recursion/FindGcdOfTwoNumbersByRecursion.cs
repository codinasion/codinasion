using System;

class GCD {
  static int gcd(int x, int y) {
    if (y == 0)
      return x;
    return gcd(y, x%y);
  } 

  static void Main(string[] args) {
    int x = 12;
    int y = 18;

    Console.WriteLine("GCD of "+ x +" and "+ y +" is: "+ gcd(x,y));
  }
}
