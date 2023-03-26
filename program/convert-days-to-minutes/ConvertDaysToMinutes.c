#include <stdio.h>

int main()
{
    int days, minutes; 

    printf("Enter number of days : ");
    scanf("%i", &days);

    minutes = days * 1440;

    printf("Minutes :   %i", minutes);
    
    return 0;
}
