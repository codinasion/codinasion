#include <stdio.h>
#define _USE_MATH_DEFINES
#include <math.h>

int main()
{

    float Height, Radius, cylinderSurface;

    printf("enter height \n");
    scanf("%f", &Height);

    printf("enter radius \n");
    scanf("%f", &Radius);

    cylinderSurface = 2 * M_PI * Radius * (Radius + Height);

    printf("cylinder surface is %f", cylinderSurface);

    return 0;
}