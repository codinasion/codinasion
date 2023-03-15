#include <stdio.h> /* scanf, printf */
#include <stdlib.h> /*malloc, free*/

int FindSum(int *arr,int size);

/* taken from the recursion program */
void InitArr(int *arr,int size);

int main()
{
    int *arr = NULL;
    int size = 0;
    printf("how many  elements you want to insert?\n");
    if(1 != scanf("%d",&size))
    {
        return -1;
    }

    arr = (int *)malloc(size * sizeof(int));

    if (arr == NULL)
    {
        return -1;
    }

    InitArr(arr,size);

    printf("%d\n",FindSum(arr,size));

    free(arr);

    return 0;
}

void InitArr(int *arr,int size)
{
    int i = 0;
    printf("please enter all of the elements:\n");

    for(i = 0; i < size; ++i)
    {
        if(scanf("%d",arr + i)!= 1)
        {
            free(arr);
            exit(1);
        }
    }
}

int FindSum(int *arr,int size)
{
    int ret = 0;
    int i = 0;

    for(i = 0; i < size; ++i)
    {
        ret += arr[i];
    }

    return ret;
}