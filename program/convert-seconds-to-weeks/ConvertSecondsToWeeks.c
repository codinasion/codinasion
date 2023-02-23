#include <stdio.h> /* printf, scanf*/

int ConvertSecondsToWeeks(int seconds);

int main()
{
    int seconds = 0;

    scanf("%d",&seconds);

    printf("%d\n",ConvertSecondsToWeeks(seconds));

    return 0;
}

int ConvertSecondsToWeeks(int seconds)
{
    return (seconds / 604800);
}