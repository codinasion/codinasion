import java.util.*;
class FindLcmOfTwoNumbersByRecursion
{
  public static int gcd(int a, int b)
    {
        if (a == 0)
            return b;
        return gcd(b % a, a);
    }
  public static int lcm(int a, int b)
    {
        return (a / gcd(a, b)) * b;
    }
  public static void main(String[] args)
    {
      Scanner sc=new Scanner(System.in);
      System.out.println("Enter first number");
      int a = sc.nextInt();
      System.out.println("Enter second number");
      int b = sc.nextInt();
      System.out.println("lcm : "+lcm(a, b));
    }
}