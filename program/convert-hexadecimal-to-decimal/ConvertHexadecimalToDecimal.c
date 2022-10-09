// C program to convert hexadecimal to decimal

#include <math.h>
#include <stdio.h>
#include <string.h>
int main()
{
	char hexdecnumber[17] = "2D";
	int decimalnumber, place;
	int i = 0, val, len;
	decimalnumber = 0;

	// finding the length of hexadecnumber
	len = strlen(hexdecnumber);
	len--;

	// while loop executes the statements until the
	// condition is false
	while (hexdecnumber[i] != '\0') {

		// finding the equivalent decimal digit for each
		// hexa decimal digit
		if (hexdecnumber[i] >= '0'
			&& hexdecnumber[i] <= '9') {
			val = hexdecnumber[i] - 48;
		}
		else if (hexdecnumber[i] >= 'a'
				&& hexdecnumber[i] <= 'f') {
			val = hexdecnumber[i] - 97 + 10;
		}
		else if (hexdecnumber[i] >= 'A'
				&& hexdecnumber[i] <= 'F') {
			val = hexdecnumber[i] - 65 + 10;
		}
		// final decimal number
		decimalnumber += val * pow(16, len);
		len--;
		i++;
	}
	// printing the result
	printf("Hexadecimal number = %s\n", hexdecnumber);
	printf("Decimal number = %d", decimalnumber);
	return 0;
}
