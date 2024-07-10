using System;

class SelectionSort {
    static void Main(string[] args) {
        int[] arr = {8, 5, 2, 6, 9, 3, 1, 4, 0, 7};
        Console.WriteLine("Input array:");
        PrintArray(arr);

        SelectionSortAlgorithm(arr);

        Console.WriteLine("\nSorted array:");
        PrintArray(arr);
    }

    static void SelectionSortAlgorithm(int[] arr) {
        int n = arr.Length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex != i) {
                // Swap arr[minIndex] and arr[i]
                int temp = arr[minIndex];
                arr[minIndex] = arr[i];
                arr[i] = temp;
            }
        }
    }

    static void PrintArray(int[] arr) {
        foreach (int num in arr) {
            Console.Write(num + " ");
        }
        Console.WriteLine();
    }
}
