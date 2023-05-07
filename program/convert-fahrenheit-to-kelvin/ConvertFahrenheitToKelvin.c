#include <stdio.h>

double ConvertFahrenheitToKelvin(double fahrenheit)
{
    return (fahrenheit + 459.67) * (5.0 / 9.0);
}

int main()
{
    printf("1 (should convert to 255.928): %f\n", ConvertFahrenheitToKelvin(1));
    printf("0 (should convert to 255.372): %f\n", ConvertFahrenheitToKelvin(0));
    printf("1000 (should convert to 810.928): %f\n", ConvertFahrenheitToKelvin(1000));
    printf("-50 (should convert to 227.594): %f\n", ConvertFahrenheitToKelvin(-50));

    return 0;
}
