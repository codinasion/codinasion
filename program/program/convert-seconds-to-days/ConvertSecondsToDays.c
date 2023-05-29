#include <stdio.h>

int main(int argc, char **argv)
{
    float seconds, minutes, hours, days;

    // Prompt user for input
    printf("Enter time in seconds:\n");
    scanf("%f", &seconds);

    // Convert seconds to minutes, to hours, to days
    minutes = seconds / 60.0;
    hours = minutes / 60.0;
    days = hours / 24.0;

    // Output result
    printf("Time in Days: %f\n", days);

    return 0;
}
