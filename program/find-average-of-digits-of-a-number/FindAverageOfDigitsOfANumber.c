#include <stdio.h>

float average_of_digits(int number) {
	int sum = 0, digits = 0;

	while (number != 0) {
		digits++;
		sum += number % 10;
		number /= 10;
	}	

	return (float)sum / (float)digits;
}

int main() {
	int n;
	scanf("%d", &n);
	printf("%.2f", average_of_digits(n));
	return 0;
}
