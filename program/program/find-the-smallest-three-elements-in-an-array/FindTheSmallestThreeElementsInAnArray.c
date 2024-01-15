#include <stdio.h>

void findSmallestThree(int ARay[], int thingy)
{
    if (thingy < 3)
    {
        printf("ERROR! Input Array Size < 3\n");
        return;
    }

    int first, second, third;

    first = second = third = ARay[0];

    for (int i = 1; i < thingy; i++)
    {
        if (ARay[i] < first)
        {
            third = second;
            second = first;
            first = ARay[i];
        }
        else if (ARay[i] < second)
        {
            third = second;
            second = ARay[i];
        }
        else if (ARay[i] < third)
        {
            third = ARay[i];
        }
    }

    printf("The smallest three elements: %d %d %d\n", first, second, third);
}

int main()
{
    int ARay[] = { 10, 4, 3, 50, 23, 90 };
    int thing = sizeof(ARay) / sizeof(ARay[0]);
    findSmallestThree(ARay, thing);

    int ARay2[] = { 12, 13, 1, 10, 34, 1 };
    int thing2 = sizeof(ARay2) / sizeof(ARay2[0]);
    findSmallestThree(ARay2, thing2);

    return 0;
}

/* Cautiously Crafted By Redzwinger */