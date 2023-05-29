//Contributed by Raghav Garg (grraghav120)
//ConvertHoursToWeeks.c

// 1 week = 7 days = 168 hours

// 168 hrs=1 week
// 1 hrs=1/168 week

#include <stdio.h>

int main()
{
    float hours;
    scanf("%f",&hours);
    printf("%0.2f\n",(hours/168));
    return 0;
}
