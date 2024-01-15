#include <stdio.h>

void TheBigThree(int ARay[], int n)
{
    int Largest = ARay[0], secondLargest = ARay[0], thirdLargest = ARay[0];

    for (int i = 1; i < n; ++i) {
        if (ARay[i] > Largest)
        {
            thirdLargest = secondLargest;
            secondLargest = Largest;
            Largest = ARay[i];
        }
        else if (ARay[i] > secondLargest)
        {
            thirdLargest = secondLargest;
            secondLargest = ARay[i];
        }
        else if (ARay[i] > thirdLargest)
        {
            thirdLargest = ARay[i];
        }
    }

    printf("\n The three largest elements are: %d, %d, %d\n", Largest, secondLargest, thirdLargest);
}

int main()
{
    int n;
    printf("\n [Note: The Array should have at least three elements.]\n\n");
    printf(" Please enter the size of the array: ");
    scanf("%d", &n);

    if (n < 3)
    {
        printf("\n ERROR! Input Array Size < 3 \n");
        return 1;
    }

    int* ARei = malloc(n * sizeof(int));
    printf("\n Now, enter the elements of the array:\n");

    for (int i = 0; i < n; ++i)
    {
        printf(" Element %d: ", i + 1);
        scanf("%d", &ARei[i]);
    }

    TheBigThree(ARei, n);
    free(ARei);

    return 0;
}

/* Cautiously Crafted By Redzwinger */
