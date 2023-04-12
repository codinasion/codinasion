using System;
public class SwapNumbers
{
       public static void Main(string[] args)
         {
            int number1, number2, temp;
            Console.Write("Enter the First Number : ");
            number1 = int.Parse(Console.ReadLine());
            Console.Write("Enter the Second Number : ");
            number2 = int.Parse(Console.ReadLine());
            temp = number1;
            number1 = number2;
            number2 = temp;
            Console.Write("\nAfter Swapping ");
            Console.Write("\nFirst Number : "+number1);
            Console.Write("\nSecond Number : "+number2);
            Console.Read();
        }
}
