using System;
 
class GFG {
    public static void Main()
    {
        int x = 10;
        int y = 20;
 
        x = x + y;
        y = x - y;
        x = x - y;
        Console.WriteLine("After swapping: x = " + x + ", y = " + y);
    }
}
 
