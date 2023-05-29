// C# program to convert minutes in seconds 

using System;

class GFG
{


static void convertMinutes(int n)
{
int  seconds;

	
	seconds = n * 60;

	Console.WriteLine(seconds);
}

// Driver code
public static void Main ()
{
	int n = Console.ReadLine();
	convertMinutes(n);
}
}


