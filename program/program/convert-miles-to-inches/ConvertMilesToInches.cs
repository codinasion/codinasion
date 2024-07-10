
using System;  
public class ConvertMilesToInches 
{  
 public static void Main(string[] args)  
    {  
      if (args.Length == 0)
	    {
		    Console.WriteLine("Invalid args");
		    return;
	    }
        int miles = Int32.Parse( args[0]);
        Console.WriteLine(miles * 63360);
    }
}  