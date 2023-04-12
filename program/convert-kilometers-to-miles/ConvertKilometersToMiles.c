#include <stdio.h>

int main()
{
    float kilometer;
    int miles;

    printf("Enter kilometer :    ");
    scanf("%f", &kilometer);

    miles = kilometer/1.609; 

    printf("%f  kilometer is    :   %i  miles", kilometer, miles);

    return 0;
}
