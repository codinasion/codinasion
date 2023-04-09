#include <stdio.h>

int sum_of_digits(int nmbr) {
	int sum = 0;

	while (nmbr != 0) {
		sum += nmbr % 10;
		nmbr /= 10;
	}

	return sum;
}

int main() {
	int n;
	scanf("%d", &n);
	printf("%d", sum_of_digits(n));
	return 0;
}
