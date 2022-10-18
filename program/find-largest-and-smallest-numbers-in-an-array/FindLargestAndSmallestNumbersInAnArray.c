#include<stdio.h>
#include<stdlib.h>




int main()
{
    int n , largest , smallest;
    printf("Enter the number of elements in array");
    scanf("%d", &n);

    int array[n];
    printf("Enter the elememts");
    for(int i=0;i<n;i++)
    {
        scanf("%d", &array[i]);
    }

    // edge case
    if( n == 0)
    {
        printf("No elements in array");
        exit(0);
    }

    
    largest = array[0];
    smallest = array[0];

    for(int i=0;i<n;i++)
    {
        // condition to largest element
        if(array[i] > largest)
            largest = array[i];

        // condition to smallest element
        if(array[i] < smallest)
            smallest = array[i];
        
    }

    printf("%d %d", largest , smallest);
    return 0;
}