#include <stdio.h> /* printf , scanf */

/* assuming num >= 1 */
int FactorialRec(int num);

int main()
{
    int num = 0;
    int is_good = scanf("%d",&num);

    if(is_good != 1)
    {
        return -1;
    }

    printf("%d\n",FactorialRec(num));

    return 0;
}

int FactorialRec(int num)
{
    if(num == 1)
    {
        return 1;
    }

    return num * FactorialRec(num -1);
}
