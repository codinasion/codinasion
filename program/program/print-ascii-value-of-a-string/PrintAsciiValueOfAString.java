import java.util.*;
class PrintAsciiValueOfAString
{
  public static void printAscii(String s)
  {
    for(char c:s.toCharArray())
     System.out.print((int)(c)+" ");
  }
   public static void main(String args[]) 
   {
      Scanner sc=new Scanner(System.in);
      System.out.println("Enter string ");
      String s=sc.nextLine();
      printAscii(s); 
   }
}