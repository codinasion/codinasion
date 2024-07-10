using System;

class SmallestThreeNumbers {
    public static void Main(string[] args) {
        // Example array of numbers
        int[] arr = {10, 4, 3, 50, 23, 90};

        // Find and print the smallest three numbers
        int[] smallestThree = FindSmallestThreeElementsInAnArray(arr);
        if (arr.Length >= 3) {
            Console.WriteLine("Smallest three numbers: " + string.Join(", ", smallestThree));
        }
    }

    public static int[] FindSmallestThreeElementsInAnArray(int[] arr) {
        if (arr.Length < 3) {
            Console.WriteLine("Array size should be at least 3");
            return null;
        }
        else if (arr.Length == 3) {
            return arr;
        }

        // Create a temporary array so the original stays unaffected
        int[] tempArray = (int[])arr.Clone();

        // Sort the new array in ascending order
        Array.Sort(tempArray);

        // Create a new array to store the smallest three numbers
        int[] smallestThree = new int[3];
        for (int i = 0; i < 3; i++) {
            smallestThree[i] = tempArray[i];
        }

        return smallestThree;
    }
}
