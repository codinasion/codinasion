#include <stdio.h> /* printf */
#include <stdlib.h> /* size_t */
/*****************************************************************/
/* function to reverse the arr, O(N) */
void ReverseAnArray(int *arr, size_t size);

/* function to print the array*/

void PrintArr(int *arr,size_t size);
/*****************************************************************/
int main()
{
    int *arr = NULL;
    size_t size = 0;
    size_t i = 0;
    int new_elem = 0;
    printf("size of the arr:");
    scanf("%lu",&size);
    
    printf("\nplease enter elements:");

    arr = (int *) malloc(size * sizeof(int));

    for(i = 0; i < size;++i)
    {
        scanf("%d",&new_elem);

        arr[i] = new_elem;
    }
    
    ReverseAnArray(arr,size);

    PrintArr(arr,size);

    free(arr);

    return 0;
}
/*****************************************************************/
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
/*****************************************************************/
void PrintArr(int *arr,size_t size)
{
    size_t i = 0;

    printf("\n");

    for(i = 0; i < size;++i)
    {
        printf("%d ",arr[i]);
    }
}