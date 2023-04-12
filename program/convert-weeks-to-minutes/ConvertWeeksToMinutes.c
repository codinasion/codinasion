#include <stdio.h>


int weekToMinutes(int weeks){

    return weeks * 10080;

}


int main()
{
    int weeks;

    printf("Enter weeks :   ");
    scanf("%i", &weeks);

    printf("Total minutes is    :   %i", weekToMinutes(weeks));
    
    return 0;

}
