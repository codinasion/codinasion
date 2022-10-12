using System;
public class PerimeterOfRectangle
{
    public static void Main()
    {
        Console.Write("Enter the value of length : ");
        decimal Length = Convert.ToDecimal(Console.ReadLine());
        Console.Write("Enter the value of width : ");
        decimal Width = Convert.ToDecimal(Console.ReadLine());
        decimal Perimeter = 2 * (Length + Width);
        Console.Write("Perimeter of Rectangle is: " + Perimeter);
        Console.ReadLine();
    }
}
