using System;  
public class Exercise31  
{  
    public static void Main()
{
   int i,j,r;
  
   r = Convert.ToInt32(5);   
   for(i=0;i<=r;i++)
   {
     for(j=1;j<=r-i;j++)
     Console.Write(" ");
     for(j=1;j<=2*i-1;j++)
     Console.Write("*");
     Console.Write("\n");
   }
 
   for(i=r-1;i>=1;i--)
   {
     for(j=1;j<=r-i;j++)
     Console.Write(" ");
     for(j=1;j<=2*i-1;j++)
       Console.Write("*");
     Console.Write("\n");
   }
  }
}
