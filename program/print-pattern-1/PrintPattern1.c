#include<stdio.h>

void printPattern(int n) {
	for(int i=1;i<=n;i++) {
		for(int j=1;j<=i;j++) {
			printf("%2d",j);
		}
		printf("\n");
	}
}
void main() {
	int n;
	printf("Enter number of rows: ");
	scanf("%d",&n);
	printPattern(n);
}
