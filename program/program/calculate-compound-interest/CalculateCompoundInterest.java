import java.util.*;
class compoundInterest
{
   public static void main (String args[])
   {
      double principal, rate, time, compound_interest;
      Scanner sc = new Scanner(System.in);
      System.out.print("Enter Principle amount : ");
      principal = sc.nextInt();
      System.out.print("Enter Interest rate : ");
      rate = sc.nextInt();
      System.out.print("Enter Time period in years : ");
      time = sc.nextInt();
      compound_interest = principal * (Math.pow((1 + rate / 100), time));
      System.out.println("The Compound Interest is : " + compound_interest);
   }
}
