import java.util.*;
class ConvertInchesToCentimeters
{
  public static double inchesToCentimeter(double in)
  {
    return in*2.54;
  }
  public static void main(String args[])
  {
    Scanner sc=new Scanner(System.in);
    System.out.println("Enter inches");
    double in=sc.nextDouble();
    System.out.println(inchesToCentimeter(in));
  }
}