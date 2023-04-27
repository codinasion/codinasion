#include <stdio.h>

/*
 * Functions to convert Fahrenheit to Kelvin
 */
double convert_tmp(double f_tmp)
{
        double k_tmp = ((((f_tmp-32)*5) / 9)) + 273.15;
        return k_tmp;
}

int main()
{
        double f_tmp;
        printf("Enter the Fahrenheit tmp: ");
        scanf("%lf", &f_tmp);

        double k_tmp = convert_tmp(f_tmp);

        printf("Kelvin tmp: %lf\n", k_tmp);

        return 0;
}
