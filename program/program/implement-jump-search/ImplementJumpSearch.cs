using System;

class JumpSearch
{
    public static int JumpSearchFunction(int[] arr, int target)
    {
        int n = arr.Length;
        int step = (int)Math.Floor(Math.Sqrt(n));
        int prev = 0;

        while (arr[Math.Min(step, n) - 1] < target)
        {
            prev = step;
            step += (int)Math.Floor(Math.Sqrt(n));
            if (prev >= n)
                return -1;
        }

        while (arr[prev] < target)
        {
            prev++;

            if (prev == Math.Min(step, n))
                return -1;
        }

        if (arr[prev] == target)
            return prev;

        return -1;
    }

    public static void Main(string[] args)
    {
        Console.WriteLine("Enter the number of elements in the array:");
        int n = int.Parse(Console.ReadLine());
        int[] arr = new int[n];

        Console.WriteLine("Enter the elements of the array in sorted order and enter to input next number:");
        for (int i = 0; i < n; i++)
        {
            arr[i] = int.Parse(Console.ReadLine());
        }

        Console.WriteLine("Enter the element to search:");
        int target = int.Parse(Console.ReadLine());

        int result = JumpSearchFunction(arr, target);

        if (result == -1)
        {
            Console.WriteLine("Element not found in the array.");
        }
        else
        {
            Console.WriteLine($"Element found at index {result}.");
        }
    }
}
