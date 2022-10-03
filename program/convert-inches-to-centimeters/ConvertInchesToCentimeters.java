import java.util.*;
public class ConvertInchesToCentimeters {
  public static double inchesToCentimeters(int n)
  {
    double x=2.54;
    return n*x;
  }
  public static void main(String args[]) 
   {
      Scanner sc=new Scanner(System.in);
      System.out.println("Enter inches");
      int n=sc.nextInt();
      System.out.println(inchesToCentimeters(n));
   }
}
