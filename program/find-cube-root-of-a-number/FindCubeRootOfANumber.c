#include <stdio.h>
#include <math.h>

int main()
{
    double num;

    printf("Enter a number: ");
    scanf("%lf", &num); 

    double result = cbrt(num); 

    printf("Cube root of %.2f is    :    %.2f\n", num, result);
}
