#include <stdio.h> /* printf */
#include <stdlib.h> /* size_t */


void ReverseAnArray(int *arr, size_t size);

int main()
{
    int arr[6] = {1,2,3,4,5,6};
    size_t size = 6;
    size_t i = 0;
    
    
    ReverseAnArray(arr,size);

    for(i = 0; i < size;++i)
    {
        printf("%d ",arr[i]);
    }

    return 0;
}

void ReverseAnArray(int *arr, size_t size)
{
    size_t i = 0;
    size_t rev = size - 1;
    int tmp = 0;

    for(i = 0; i< (size/2); ++i, --rev)
    {
        tmp = arr[i];

        arr[i] = arr[rev];
        arr[rev] = tmp;    
    }
}
