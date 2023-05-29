#include <stdio.h>
#include <math.h>

int main()
{
    // Declare variables
    int meter;
    double miles;

    printf("Enter distance in meters : ");
    scanf("%d", &meter);

    // Convert meter to miles
    miles = meter * 0.00062137119;

    // Using Round off  - nearest integer value
    int result = round(miles);

    // Distance in miles
    printf("\nDistance in miles : %d\n", result);

    return 0;
}
