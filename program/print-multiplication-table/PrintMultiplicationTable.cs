using System;  
public class Multiplication  
{  
    public static void Main() 
{
   int j,n;
   Console.Write("Enter a number to generate multiplication table: ");
   n= Convert.ToInt32(Console.ReadLine());   
   Console.Write("\n");
   for(j=1;j<=10;j++)
   {
     Console.Write("{0} X {1} = {2} \n",n,j,n*j);
   }
  }
}
