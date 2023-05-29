using System;

class VolumeaOfCuboid
{
    static void Main()
    {
        double Length = Convert.ToDouble(Console.ReadLine());
        double Width = Convert.ToDouble(Console.ReadLine());
        double Height = Convert.ToDouble(Console.ReadLine());

        // Applying the formula
        double Volume = Height * Width * Length;

        Console.WriteLine("Length  : " + Length);
        Console.WriteLine("Width   : " + Width);
        Console.WriteLine("Height  : " + Height);
        Console.WriteLine("Volume  : " + Volume);
    }
}
