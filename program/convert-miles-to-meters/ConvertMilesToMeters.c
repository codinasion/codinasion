#include <stdio.h>

int main() {
    float miles;

    printf("Enter the distance in miles    :    ");
    scanf("%f", &miles);

    double meter = miles * 1609.34;

    printf("Meter   :   %.2f", meter);
    return 0;
}