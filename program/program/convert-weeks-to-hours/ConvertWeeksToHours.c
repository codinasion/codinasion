#include <stdio.h>

void main()
{
    int num;

    printf("Enter number of weeks : ");
    scanf("%d", &num);
    
    int total_hours;

    total_hours = num * 168;

    printf("\nTotal hours is  : %d\n", total_hours);
}
