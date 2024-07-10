using System;

class Program
{
    static void FindLargestTwoElements(int[] arr)
    {
        int firstLargest = int.MinValue;
        int secondLargest = int.MinValue;

        foreach (int num in arr)
        {
            if (num > firstLargest)
            {
                secondLargest = firstLargest;
                firstLargest = num;
            }
            else if (num > secondLargest && num != firstLargest)
            {
                secondLargest = num;
            }
        }

        if (secondLargest == int.MinValue)
        {
            Console.WriteLine("Array has less than two distinct elements.");
        }
        else
        {
            Console.WriteLine($"The largest two elements are {firstLargest} and {secondLargest}");
        }
    }

    static void Main()
    {
        int[] arr1 = { 12, 13, 1, 10, 34, 1 };
        FindLargestTwoElements(arr1);

        int[] arr2 = { 10, 5, 10 };
        FindLargestTwoElements(arr2);

        int[] arr3 = { 10, 10, 10 };
        FindLargestTwoElements(arr3);
    }
}
