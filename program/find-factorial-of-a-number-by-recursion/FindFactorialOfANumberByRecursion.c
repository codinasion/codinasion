#include <stdio.h> /* printf , scanf */


int main()
{
    int num = 0;
    int is_good = scanf("%d",&num);

    if(is_good != 1)
    {
        return -1;
    }

    printf("%d",FactorialRec(num));

    return 0;
}