using System;

class GCD {
  static void Main(string[] args) {
    int x = 12;
    int y = 18;
    int gcd = 1;
    int temp;

    if (x > y) {
      temp = x;
      x = y;
      y = temp;
    }

    for(int i = 1; i < (x+1); i++) {
      if (x%i == 0 && y%i == 0)
        gcd = i;
    }

    Console.WriteLine("GCD of "+ x +" and "+ y +" is: "+ gcd);
  }
}
