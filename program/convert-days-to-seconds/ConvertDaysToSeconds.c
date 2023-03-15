#include<stdio.h> /* printf, scanf */

int ConvertToSeconds(int days);

int main()
{
    int days = 0;

    if(1 != scanf("%d",&days))
    {
        return -1;
    }

    printf("%d\n",ConvertToSeconds(days));

    return 0;
}

int ConvertToSeconds(int days)
{
    return days * 60 * 1440;
}