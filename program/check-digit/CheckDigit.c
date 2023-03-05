#include <stdio.h> /* printf, scanf */

int IsDigit(int check_me);

int main()
{
    int check_me = 0;

    int is_good = scanf("%d",&check_me);

    if(is_good != 1)
    {
        return -1;
    }

    is_good = IsDigit(check_me);

    if(is_good)
    {
        printf("Digit\n");
    }

    else
    {
        printf("Not a digit\n");

    }

    return 0;
}

int IsDigit(int check_me)
{
    return ((check_me >= '0') && (check_me <= '9')) ? 1 : 0;
}