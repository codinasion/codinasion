#include <stdio.h>

int main(){

    float length_in_cm;
    printf("Enter length in centimeters\n");
    scanf("%f", &length_in_cm);

    float length_in_ft = length_in_cm / 30.48;
    printf("Length in feet = %.2f \n", length_in_ft);

    return 0;
}