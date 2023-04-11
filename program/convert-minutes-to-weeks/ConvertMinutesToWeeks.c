#include <stdio.h>

int main()
{
    int week, minutes;

    printf("Enter minutes   :   ");
    scanf("%i", &minutes);

    week = minutes/10080;

    printf("Weeks   :   %i", week);

    return 0;
}
