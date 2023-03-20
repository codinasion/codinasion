#include <stdio.h> /* printf, scanf */

/* According to issue example, 
assuming that both num and expo are positive natural numbers*/

int PowerOf(int num, int expo);


int main()
{
    int num = 0;
    int expo = 0;

    int is_good =scanf("%d%d",&num,&expo);

    if(is_good != 2)
    {
        printf("scanf failed\n");
        return -1;
    }

    printf("%d\n",PowerOf(num,expo));

    return 0;
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