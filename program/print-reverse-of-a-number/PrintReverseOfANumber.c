#include <stdio.h>

int reverse(int n) {
	int reverseNumber = 0;
	while(n) {
		reverseNumber = reverseNumber * 10 + (n%10);
		n/=10;
	}
	return reverseNumber;
}
int main(){
	int n;
	printf("Enter a number :");
	scanf("%d",&n);
	printf("Number in reverse : %d", reverse(n));
}