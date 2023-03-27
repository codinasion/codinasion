using System;

class Program
{
    static void Main(string[] args)
    {
        // Prompt the user to enter a weight in pounds
        Console.Write("Enter a weight in pounds: ");
        double pounds = double.Parse(Console.ReadLine());

        // Convert the weight from pounds to kilograms
        double kilograms = pounds / 2.20462;

        // Display the result
        Console.WriteLine("{0} pounds is {1:F2} kilograms", pounds, kilograms);
    }
}
