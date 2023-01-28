using System;

namespace VolumeOfCylinder
{
    // Function to calculate the volume of a cylinder
    static double VolumeOfCylinder(double radius, double height)
    {
        // Calculate the volume using the formula:
        // V = π * r^2 * h
        double volume = Math.PI * Math.Pow(radius, 2) * height;

        // Return the calculated volume
        return volume;
    }

    class Program
    {
        static void Main(string[] args)
        {
            // Example:
            // Calculate the volume of a cylinder with radius 5 and height 10
            double cylinderRadius = 5;
            double cylinderHeight = 10;
            double cylinderVolume = VolumeOfCylinder(cylinderRadius, cylinderHeight);

            Console.WriteLine($"Volume of cylinder = {cylinderVolume}");
        }
    }
}