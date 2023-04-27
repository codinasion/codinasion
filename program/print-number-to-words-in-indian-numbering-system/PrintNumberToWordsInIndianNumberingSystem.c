#include <stdio.h>

static char *words[] = {"", "One", "Two", "Three", "Four", "Five", "Six", "Seven",
				 "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen",
				 "Fiveteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"};


static char *tens[] = {"", "", "Twenty", "Thirty", "Forty", "Fifty",
				 "Sixty", "Seventy", "Eighty", "Ninety"};


static char *face_val[] = {"Crore", "Lakh", "Thousand", "Hundred"};
static int divisor[] = {10000000, 100000, 1000, 100, 1};


void parse(int n)
{
	if (n < 20)
		printf("%s", words[n]);
	else {
		printf("%s %s", tens[n/10], words[n%10]);
	}
}

void main()
{
	int n, div;

	printf("Enter number: ");
	scanf("%d", &n);

	if (n == 0) {
		printf("Zero\n");
		return;
	}

	for(int i = 0; i < 5; ++i) {
		div = divisor[i];
		if ((n/div) != 0) {
			parse(n/div);
			if (i == 4)
				continue;
			
			printf(" %s ", face_val[i]);
		}

		n %= div;
	}
	printf("\n");

	return;
}