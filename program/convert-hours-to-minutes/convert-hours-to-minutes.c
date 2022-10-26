#include <stdio.h>

int main(void) {
	int hours;

	printf("Please enter hours:");
	scanf("%d", &hours);

	int minutes = hours * 60;

	printf("%d Minutes", minutes);
}