using System;

public class HelloWorld
{
    static int BinarySearch(int[] array, int size, int value)
    {
        int lowerBound = 0;
        int upperBound = size - 1;

        while (lowerBound <= upperBound)
        {
            int midPoint = lowerBound + (upperBound - lowerBound) / 2;

            if (array[midPoint] < value)
            {
                lowerBound = midPoint + 1;
            }
            else if (array[midPoint] > value)
            {
                upperBound = midPoint - 1;
            }
            else
            {
                return midPoint; 
            }
        }

        return -1; 
    }

    static void Main()
    {
        Console.Write("Enter sorted array elements separated by space: ");
        string[] inputArray = Console.ReadLine().Split(' ');

        int[] array = Array.ConvertAll(inputArray, int.Parse);

        Console.Write("Enter the value to search: ");
        int valueToSearch = int.Parse(Console.ReadLine());

        int index = BinarySearch(array, array.Length, valueToSearch);

        if (index != -1)
        {
            Console.WriteLine($"Value {valueToSearch} found at index {index}.");
        }
        else
        {
            Console.WriteLine($"Value {valueToSearch} not found in the array.");
        }
    }


}
