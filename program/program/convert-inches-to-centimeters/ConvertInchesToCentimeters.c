#include<stdio.h>

int main()
{
    float inch,centimeter;
    printf("Enter the value in inch : ");
    scanf("%f",&inch);
    centimeter=inch*2.54;
    printf("The value in centimeter : %.2f",centimeter);
}