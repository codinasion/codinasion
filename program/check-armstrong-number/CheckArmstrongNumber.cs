using System;  
  
namespace ArmstrongNumbers  
{  
    class Program  
    {  
        static void Main(string[] args)  
        {  
            int number, rem, temp, sum = 0;  
            Console.Write("Enter a Number : ");  
            number = int.Parse(Console.ReadLine());  
  
            temp = number;  
            while (number > 0)  
            {  
                rem = number % 10;  
                sum =sum+(rem*rem*rem);  
                number= number/ 10;  
            }  
              
            if (temp == sum)  
                Console.WriteLine(temp + " is an Armstrong Number");  
            else  
                Console.WriteLine(temp + " is not an Armstrong Number");  
            Console.ReadKey();  
        }  
    }  
}  
