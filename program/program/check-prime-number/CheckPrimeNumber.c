#include <stdio.h>
int main()
{
    int a, number, count = 0;
    printf("enter number to check for prime or not prime :");
    scanf("%d", &number);
    for (a = 1; a <= number; a++)
        if (number % a == 0)
            count++;
    if (count == 2)
        printf("prime number\n");
    else
        printf("it is not a prime number\n");
    return 0;
}