#include <stdio.h>

int binarySearch(int ARay[], int thing, int findThis) 
{
    int lowerBound = 0;
    int upperBound = thing - 1;

    while (lowerBound <= upperBound) 
    {
        int mid = lowerBound + (upperBound - lowerBound) / 2;

        if (ARay[mid] == findThis) 
        {
            return mid;
        }
        else if (ARay[mid] < findThis) 
        {
            lowerBound = mid + 1;
        }
        else 
        {
            upperBound = mid - 1;
        }
    }
    return -1;
}

int main() 
{
    int ARay[] = { 1, 2, 3, 4, 5 };
    int thing = sizeof(ARay) / sizeof(ARay[0]);
    int findThis = 4;

    int neededThing = binarySearch(ARay, thing, findThis);

    if (neededThing != -1) 
    {
        printf("Element found! It is located at index %d\n", neededThing);
    }
    else 
    {
        printf("ERROR! The given element does not exist in the current array :(\n");
    }
    return 0;
}

/* Cautiously Crafted By Redzwinger */