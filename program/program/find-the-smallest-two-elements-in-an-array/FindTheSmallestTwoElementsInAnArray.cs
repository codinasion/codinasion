using System;

class Program
{
    static void FindSmallestTwoElements(int[] arr)
    {
        if (arr.Length < 2)
        {
            Console.WriteLine("Array should have at least two elements.");
            return;
        }

        int smallest = int.MaxValue;
        int secondSmallest = int.MaxValue;

        foreach (int num in arr)
        {
            if (num < smallest)
            {
                secondSmallest = smallest;
                smallest = num;
            }
            else if (num < secondSmallest && num != smallest)
            {
                secondSmallest = num;
            }
        }

        Console.WriteLine($"Smallest Two Elements: {smallest} {secondSmallest}");
    }

    static void Main()
    {
        int[] arr1 = { 12, 13, 1, 10, 34, 1 };
        FindSmallestTwoElements(arr1);

        int[] arr2 = { 10, 5, 10 };
        FindSmallestTwoElements(arr2);
    }
}
