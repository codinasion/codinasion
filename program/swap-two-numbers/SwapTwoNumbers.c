
#include <stdio.h>

void SwapTwoNumbers(int *num1,int *num2);

int main()
{
    int num1 = 0;
    int num2 = 0;

    int is_good = scanf("%d %d",&num1,&num2);

    if(is_good != 2)
    {
        return -1;
    }

    SwapTwoNumbers(&num1,&num2);

    printf("%d %d",num1,num2);

    return 0;
}

void SwapTwoNumbers(int *num1,int *num2)
{
    int tmp = *num1;
    *num1 = *num2;
    *num2 = tmp;
}

/* contributed by osher harari*/