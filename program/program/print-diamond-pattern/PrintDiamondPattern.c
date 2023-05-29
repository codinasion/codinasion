#include<stdio.h>

void printDiamond(int n)
{
	int space = n - 1;

	for (int i = 0; i < n; i++)
	{
		for (int j = 0;j < space; j++)
			printf(" ");

		for (int j = 0;j <= i; j++)
			printf("* ");

		printf("\n");
		space--;
	}

	space = 0;

	for (int i = n; i > 0; i--)
	{
		for (int j = 0; j < space; j++)
			printf(" ");

		for (int j = 0;j < i;j++)
			printf("* ");

		printf("\n");
		space++;
	}
}

// Driver code
int main()
{
	printDiamond(5);
	return 0;
}
