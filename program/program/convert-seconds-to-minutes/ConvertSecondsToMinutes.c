#include <stdio.h> /* printf, scanf */

int ConvertSecondsToMinutes(int seconds);


int main()
{
    int seconds = 0;
    int is_good = 0;

    printf("please enter a number in seconds:\n");
    
    is_good = scanf("%d",&seconds);

    if(is_good != 1)
    {
        return -1;
    }

    printf("the number in minutes: %d \n",ConvertSecondsToMinutes(seconds));

    return 0;
}

int ConvertSecondsToMinutes(int seconds)
{
    return (seconds / 60);
}
