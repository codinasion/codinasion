#include <stdio.h>

int main() {
    int decimalNum, remainder, quotient;
    char hexadecimalNum[10];
    int i = 1, j;

    printf("Enter a decimal number: ");
    scanf("%d", &decimalNum);

    quotient = decimalNum;

    while (quotient != 0) {
        remainder = quotient % 16;
        if (remainder < 10)
            hexadecimalNum[i++] = 48 + remainder;
        else
            hexadecimalNum[i++] = 55 + remainder;
        quotient = quotient / 16;
    }

    printf("Hexadecimal number of %d is: ", decimalNum);

    for (j = i - 1; j > 0; j--)
        printf("%c", hexadecimalNum[j]);

    return 0;
}
