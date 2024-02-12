using System;
class MoveZeros {
	static void moveZerosToEnd(int[] arr, int n)
	{
	int count = 0;
	for (int i = 0; i < n; i++)
		if (arr[i] != 0)
			arr[count++] = arr[i];
	
	for (int i = count; i<n;i++)
		arr[i]=0;
	
	}

	static void printArray(int[] arr, int n)
	{
		for (int i = 0; i < n; i++)
			Console.Write(arr[i] + " ");
	}

	public static void Main()
	{
		int[] arr = { 1, 2, 0, 4, 3, 0, 5, 0 };
		int n = arr.Length;

		Console.Write("Input array: ");
		printArray(arr, n);

		moveZerosToEnd(arr, n);

		Console.Write("\nOutput array: ");
		printArray(arr, n);
	}
}
