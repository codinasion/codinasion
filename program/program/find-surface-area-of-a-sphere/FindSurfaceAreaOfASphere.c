#include <stdio.h>

int main()
{
    int radius;
    long double surfaceArea;
    const long double PI = 3.14159265358979;

    printf("Enter radius    :   ");
    scanf("%i", &radius);

    surfaceArea = 4 * PI * radius * radius;

    printf("Surface area of sphere  :   %.14Lf", surfaceArea);

    return 0;
}
