#include <stdio.h>

int FindSum(int *arr,int size);

int main()
{
    int *arr = NULL;
    int size = 0;
    printf("how many  elements you want to insert?");
    if(1 != scanf("%d",&size))
    {
        return -1;
    }

    arr = (int *)malloc(size * sizeof(int));

    if (arr == NULL)
    {
        return -1;
    }



}

int FindSum(int *arr,int size)
{

}