using System;
namespace PrintNumbers{
    class Program{
        static void Main(string[] args){
            int number = int.Parse(Console.ReadLine());
            PrintByRecursion(number, 1);
        } 
         private static void PrintByRecursion(int number, int currentNumber){
            if(currentNumber == number)
                Console.WriteLine($"{currentNumber}");
            else{
                Console.Write($"{currentNumber} ");
                PrintByRecursion(number, ++currentNumber);
            }
        }
    }
}