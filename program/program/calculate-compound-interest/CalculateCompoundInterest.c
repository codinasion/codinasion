

#include <stdio.h>
#include <math.h>
int main()
{
    float CI, rate, PA, time;
    printf("Enter principal amount :");
    scanf("%f", &PA);
    printf("Enter the rate :");
    scanf("%f", &rate);
    printf("Enter time :");
    scanf("%f", &time);
    // formula to calculate compound interest
    CI = PA * (pow((1 + rate / 100), time));

    printf("Compound interest : %0.2f\n", CI);
    return 0;
}