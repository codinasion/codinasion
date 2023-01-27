import java.io.*;
import java.util.Scanner;

 class GCD
{
    static int gcd(int a, int b)
    {
      if (b == 0)
        return a;
      return gcd(b, a % b);
    }
     
    public static void main(String[] args)
    {
        int a = 12, b = 18;
        System.out.println("GCD of " + a +" and " + b + " is " + gcd(a, b));
    }
}
