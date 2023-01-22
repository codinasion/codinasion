#include <stdio.h>

int sum_of_digits(int number) {
	int sum = 0;

	while (number != 0) {
		sum += number % 10;
		number /= 10;
	}

	return sum;
}

int main() {
	int number;
	scanf("%d", &number);
	printf("%d", sum_of_digits(number));
	return 0;
}	
