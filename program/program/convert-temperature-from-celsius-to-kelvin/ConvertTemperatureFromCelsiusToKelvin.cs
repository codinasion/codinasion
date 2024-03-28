/*
 * To run this program without create a full .NET project, you should install dotnet-script tool globally:
 * % dotnet tool install -g dotnet-script
 * Then you can run the program with the following command:
 * % dotnet script convert_temperature_from_celsius_to_kelvin.cs
 */
var celsius = Convert.ToDouble(Console.ReadLine());

if (celsius < -273.15)
{
    throw new InvalidOperationException("There is nothing under ABSOLUTE ZERO, my friend");
}

Console.WriteLine(celsius + 273.15);