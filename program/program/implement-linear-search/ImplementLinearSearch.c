#include <stdio.h>

int linear_search(int list[], int listSize, int thingToBeFound) 
{
    for (int i = 0; i < listSize; i++) 
    {
        if (list[i] == thingToBeFound) 
        {
            return i;
        }
    }
    return -1;
}

int main()
{
    int ARay[] = { 1, 2, 3, 4, 5 };
    int sizeOfARay = sizeof(ARay) / sizeof(ARay[0]);

    int FindThis = 4;
    int foundIT = linear_search(ARay, sizeOfARay, FindThis);

    if (foundIT != -1) 
    {
        printf("Element Found! Element %d was found at index %d.\n", FindThis, foundIT);
    }
    else 
    {
        printf("ERROR! Element %d was not found in the list.\n", FindThis);
    }

    return 0;
}

/* Calmly Crafted By Redzwinger */