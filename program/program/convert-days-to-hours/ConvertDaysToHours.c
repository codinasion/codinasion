#include <stdio.h> /* printf, scanf*/

int ConvertDaysToHours(int days);

int main()
{
    int num = 0;

    int is_good = scanf("%d",&num);

    if(is_good != 1)
    {
        return -1;
    }

    printf("%d\n",ConvertDaysToHours(num));

    return 0;
}

int ConvertDaysToHours(int days)
{
    return days * 24;
}