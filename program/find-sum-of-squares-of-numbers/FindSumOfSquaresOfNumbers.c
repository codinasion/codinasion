#include <stdio.h>

int sum_squares(int input[],int n);

int main()
{
    int input[5]= {1,2,3,4,5};

    sum_squares(input,5);

    return 0;
}

int sum_squares(int input[], int n)
{
    int i=0;
    int sum=0;

    for (i=0; i<n ; ++i)
    {
        sum+=(input[i]*input[i]);
    }

    printf("sum=%d\n",sum);

    return sum;
}