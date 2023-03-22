#include <stdio.h>

int main()
{

    float celsius, fahrenheit;

    printf("enter fahrenheit \n");
    scanf("%f", &fahrenheit);

    celsius = (fahrenheit - 32) * 5 / 9;

    printf("celsuis is %f", celsius);

    return 0;
}
