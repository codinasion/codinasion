// C Code to convert Decimal number into Binary

#include <stdio.h>

void decToBinary(int n)
{
	// array to store binary number
	int binaryNum[32];

	// counter for binary array
	int i = 0;
	while (n > 0) {
		// storing remainder in binary array
		binaryNum[i] = n % 2;
		n = n / 2;
		i++;
	}

	// printing binary array in reverse order
	for (int j = i - 1; j >= 0; j--)
		printf("%d", binaryNum[j]);
}

// Driver program to test above function
int main()
{
	int n = 17;
	decToBinary(n);
	return 0;
}
