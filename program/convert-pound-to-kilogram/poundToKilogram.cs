
using System;

public class poundToKilogram
{
    public static void Main(string[] args)
    {
      Console.WriteLine("Enter weight in pounds: ");
      double pound= Convert.ToDouble(Console.ReadLine());
      double kilogram = pound * 0.453592;
      Console.WriteLine("Weight in kilogram is: {0}", kilogram );
    }
}