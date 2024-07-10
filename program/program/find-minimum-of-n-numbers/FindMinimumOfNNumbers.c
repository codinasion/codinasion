#include <stdio.h>

int findMinimumOfNNumbers(int* arr, int n)
{
	int min = arr[0], i;
	//in defualt the first num in arr is the minimum

	for(i = 1; i < n ; i++)
	{
		if (arr[i] < min)
		{
			min = arr[i];
		}
	}
	return (min);
}