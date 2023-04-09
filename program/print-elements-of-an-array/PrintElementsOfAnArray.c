# include <stdio.h>

// Prints int array
void PrintArray(int *array)
{
	int len = sizeof(array);
	for (int i = 0; i < len; ++i)
	{
		printf("%d\n", array[i]);
	}
}

void main()
{
	int array[] = {1, 2, 3, 4};
	PrintArray(array);
}