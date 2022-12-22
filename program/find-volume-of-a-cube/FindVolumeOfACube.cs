using System;
public class VolumeOfCube
{
    public static void Main()
    {
        Console.Write("Enter Side: ");
        decimal Side = Convert.ToDecimal(Console.ReadLine());
        decimal Volume = Side * Side * Side;
        Console.WriteLine("Volume of cube=" + Volume);
        Console.ReadKey();
    }
}
