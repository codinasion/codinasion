using System;

class LCM {
  static int gcd(int x, int y) {
    if (y == 0)
      return x;
    return gcd(y, x%y);
  }     

  static void Main(string[] args) {
    int x = 12;
    int y = 18;

    int lcm = (x*y)/gcd(x,y);

    Console.WriteLine("LCM of "+ x +" and "+ y +" is: "+ lcm);
  }
}
