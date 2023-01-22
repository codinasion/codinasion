#include <stdio.h>

float average_of_digits(int number, int sum, int digits) {
	if (number == 0) 
		return (float)sum / (float)digits;

	sum += number % 10;
	digits++;
	return average_of_digits(number/10, sum, digits);
}

int main() {
	int n;
	scanf("%d", &n);
	printf("%.2f", average_of_digits(n, 0, 0));
	return 0;
}
