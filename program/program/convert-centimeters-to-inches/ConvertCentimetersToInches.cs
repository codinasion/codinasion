//ISSUE #3400
using System;

class centimetersToInches
{
    public static double convertCmToInch(double centimeters){
        return centimeters/2.54; 
    }
    static void Main()
    {
        double centimeters = 12.7;

        Console.WriteLine("Input  : " + centimeters + $" {(centimeters == 1 ? "centimeter" : "centimeters")}");
        double result = convertCmToInch(centimeters);
        Console.WriteLine("Output : "+ result.ToString() + $" {(result == 1 ? "inch" : "inches")}");
    }
}
