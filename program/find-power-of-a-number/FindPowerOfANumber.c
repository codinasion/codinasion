#include <stdio.h> /* printf, scanf */

/* According to issue example, 
assuming that both num and expo are positive natural numbers*/

int PowerOf(int num, int expo);


int main()
{
    int num = 0;
    int expo = 0;

    int is_good =scanf("%d%d",num,expo);
}


int PowerOf(int num, int expo)
{
    int ret = 1;
    while(expo >= 1)
    {
        ret *= num;
        --expo;
    }

    return ret;
}