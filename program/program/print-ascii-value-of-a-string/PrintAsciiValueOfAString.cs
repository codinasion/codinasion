using System;

namespace CSharpStringToASCII {
    public class PrintAsciiValueOfAString {
        // method to convert string and prints ASCII values
        public static void PrintAsciiValues(string userInput) {
            // error handling for invalid inputs
            try{
                // iterating through user input
                foreach(char c in userInput){
                    // converting char to int
                    int asciiValue = (int)c;
                    // printing relevant char and its ASCII value
                    Console.WriteLine($"Char: {c}, ASCII value: {asciiValue}");
                }
            }
            catch{
                Console.WriteLine("Invalid input");
            }         
        }
        // main method
        public static void Main(string[] args) {
            // prompting user for input
            Console.Write("Enter a string: ");
            // read user input from input stream
            string userInput = Console.ReadLine();
            // calling method to print ASCII values of the input
            PrintAsciiValues(userInput);
        }
    }
}
