#include <stdio.h>

int main(int argc, char **argv)
{
    float seconds, minutes, hours, days;

    printf("Enter time in seconds:\n");
    scanf("%f", &seconds);

    minutes = seconds / 60.0;
    hours = minutes / 60.0;
    days = hours / 24.0;

    printf("Time in Days: %f\n", days);

    return 0;
}
