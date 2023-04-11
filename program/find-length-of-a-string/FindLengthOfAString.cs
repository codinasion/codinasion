//Find the length of the inputted string in C#

using System;  
public class Exercise2
{  
    public static void Main() 
{
    string str; /* Declares a string of size 100 */
    int l= 0;
	

      Console.Write("Input the string : ");
      str = Console.ReadLine();

         foreach(char chr in str)
        {
            l += 1;

        }

   Console.Write("Length of the string is : {0}\n\n", l);
	}
}
