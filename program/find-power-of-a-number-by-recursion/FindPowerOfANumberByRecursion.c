#include <stdio.h> /* printf, scanf */

/*assuming that num and exponent are positive and natural*/
int PowerOf(num,expo);

int main()
{
    int num =0;
    int expo =0;

    if(scanf("%d %d",&num, expo) != 2)
    {
        return -1;
    }

    printf("%d",PowerOf(num,expo));

    return 0;

}

int PowerOf(num,expo)
{
    if(expo == 1)
    {
        return num;
    }

    return PowerOf(num,expo -1) * num;
}