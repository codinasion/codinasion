using System;

class Rectangle
{
    public static int Main()
    {
        float length    = 0.0F;
        float width   = 0.0F;
        float perimeter = 0.0F;

        Console.Write("Enter the value of length: ");
        length = float.Parse(Console.ReadLine());

        Console.Write("Enter the value of width: ");
        width = float.Parse(Console.ReadLine());

        perimeter = 2 * (length + width);

        Console.WriteLine("Perimeter of rectangle: "+perimeter);
        return 0;
    }
}
