#include <stdio.h> 
int main()
{
    int days, week;
    printf("Enter the Week: ");
    scanf("%ld",&week);
    days = week * 7;
    printf("No of Days: %d\n", days);

    return 0;
}
