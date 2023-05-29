using System;

class FindSurfaceAreaOfACube
{
  static void Main()
  {
    Console.Write("Enter Side: ");
    decimal Side = Convert.ToDecimal(Console.ReadLine());
    decimal Area = 6 * (Side * Side);
    Console.WriteLine("Surface Area of Cube is:" + Area);
  }
}

// input:  Enter Side : 2
// output: Surface Area of Cube is: 24