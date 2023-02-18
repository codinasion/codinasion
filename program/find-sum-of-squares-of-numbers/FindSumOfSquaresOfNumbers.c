#include <stdio.h>

int sum_squares(int input[],int n);

int main()
{   
    printf("Enter the size of the input array :");
    int n;  scanf("%d",&n);
    int input[n];
    
    
    printf("Enter the values :\n");
    for(int i =0;i<n;i++){
        scanf("%d" , &input[i]);
    }
    
    sum_squares(input,n);

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

    printf("sum = %d\n",sum);

    return sum;
}
