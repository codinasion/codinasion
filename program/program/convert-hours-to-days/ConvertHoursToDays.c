#include<stdio.h>

double ConvertHoursToDays(int hours){
    double days = hours / 24.0;
    return days;
}

int main()
{
    int hours = 120;
    double days = ConvertHoursToDays(hours);
    printf("%f",days);
    return 0;
}