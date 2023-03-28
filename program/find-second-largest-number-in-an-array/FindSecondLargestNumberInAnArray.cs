using System;  
using System.Collections;  
  
public class SecondLargest  
{  
    public static void Main()  
    {  
        int[] array = { 1, 2, 3, 4, 5};  
        Array.Sort(array); 
        Array.Reverse(array);  
        Console.WriteLine("Second highest value in the array : " + array[1]);  
    }  
}  
