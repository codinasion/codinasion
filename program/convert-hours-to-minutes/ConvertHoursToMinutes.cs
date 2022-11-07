using System;

/**
 * ConvertHoursToMinutes
 */
public class ConvertHoursToMinutes {

    static void Main(string[] args)
    {
        Console.WriteLine("Enter Hours ");
        int input = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("Input: " + input);
        Console.WriteLine("Output: " + (input * 60));
    }
}
