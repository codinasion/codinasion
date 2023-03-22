#include <stdio.h> /* printf, scanf */

int ConvertMinToHours(int minutes);

int main()
{
    int minutes = 0;

    if(1 != scanf("%d",&minutes))
    {
        return -1;
    }

    printf("%d\n",ConvertMinToHours(minutes));

    return 0;
}

int ConvertMinToHours(int minutes)
{
    return minutes / 60;
}