// 12 to 24 hours conversion..
// by: Kundan Kumar
#include<stdio.h>
#include<string.h>
int main()
{
    int hour, minute, ss;
    char a[3];
    printf("Enter hours :   \t");
    scanf("%d", &hour);
    printf("Enter minutes : \t");
    scanf("%d", &minute);
    printf("Enter seconds : \t");
    scanf("%d", &ss);
    printf("Enter am (for morning) and pm (for evening):\t");
    scanf("%s", &a);
    /*
     * user is allowed to enter time only in 12-hour format 
     * so that 'hh' cannot be greater than 12.
     */
    if(hour <= 12 && minute <= 59 && ss <= 59)      
    {
        if((strcmp(a,"PM") == 0) || (strcmp(a,"pm") == 0) 
           && (hour != 0) && (hour != 12))
        {
            hour = hour + 12;
        }
        if((strcmp(a,"AM") == 0) || (strcmp(a,"am") == 0) && (hour == 12))
        {
            hour = 0;
        }
        printf("The obtained 24-hour format of input is :  \t");
        printf("%02d:%02d:%02d", hour, minute, ss);
        printf("\n\n");
    }
    else
    {
        printf("Provide the correct inputs.");
    }
    return 0;
}