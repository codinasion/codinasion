using System;  
public class Exercise45
{  
    public static void Main() 
{  
    int i, n1, n2, max, lcm=1;  
	Console.Write("\n\n");
    Console.Write("Determine the LCM of two numbers:\n");
    Console.Write("-----------------------------------");
    Console.Write("\n\n");	
    Console.Write("Input 1st number for LCM: ");  
    n1 = Convert.ToInt32(Console.ReadLine());	
    Console.Write("Input 2nd number for LCM: ");  
    n2 = Convert.ToInt32(Console.ReadLine());	
    max = (n1>n2) ? n1 : n2;  
    for(i=max;  ; i+=max)  
    {  
        if(i%n1==0 && i%n2==0)  
        {  
            lcm = i;  
            break;  
        }  
    }  
    Console.Write("\nLCM of {0} and {1} = {2}\n\n", n1, n2, lcm);  
 }
}
