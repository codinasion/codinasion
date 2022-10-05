#include <stdio.h>

int main(void) {
	int days;

	printf("Please enter days:"); // input 
	scanf("%d", &days); // input syntax 

	int seconds = days * 24 * 60 * 60; // conversion code 

	printf("%d Seconds", seconds); // output
}
