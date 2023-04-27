#include <stdio.h>

int main()
{
    long n;
    scanf("%ld", &n);
    long sum = (n * (n + 1)) / 2;
    printf("%ld\n", sum);
}