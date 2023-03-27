using System;  
  
namespace reverseString  
{  
    class Program  
    {  
        static void Main(string[] args)  
        {  
            string str = "", reverse = "";  
            int Length = 0;  
            Console.WriteLine("Enter a Word");  
            str = Console.ReadLine();  
            Length = str.Length - 1;  
            while(Length>=0)  
            {  
                reverse = reverse + str[Length];  
                Length--;  
            }  
            Console.WriteLine("Reverse word is : {0}",reverse);  
        }  
    }  
}  
